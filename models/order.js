const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = require('./itemSchema');

const lineItemSchema = new Schema({
    qty: {
        type: Number,
        default: 1
    },
    item: itemSchema
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

lineItemSchema.virtual('extPrice').get(function () {
    return this.qty * this.item.price;
});

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    lineItems: [lineItemSchema],
    isPaid: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function () {
    return this.lineItems.reduce((total, item) => {
        return total + item.extPrice;
    }, 0);
});

orderSchema.virtual('totalQty').get(function () {
    return this.lineItems.reduce((total, item) => {
        return total + item.qty;
    }, 0);
});

orderSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function (userId) {
    // return the promise that resolves to a cart
    // (the user's unpaid order)
    return this.findOneAndUpdate(
        { user: userId, isPaid: false },
        { user: userId },
        { upsert: true, new: true }
    );
};

orderSchema.methods.addItemToCart = async function (itemId) {
    const cart = this;

    // check if the item already exists in the cart
    const lineItem = cart.lineItems.find((lineItem) => {
        return lineItem.item._id.equals(itemId);
    });

    if (lineItem) {
        lineItem.qty += 1;
    } else {
        const Item = mongoose.model('Item'); // class
        const item = await Item.findById(itemId); // instance
        cart.lineItems.push({item});
    }
    return cart.save();
};

orderSchema.methods.setItemQty = function (itemId, newQty) {
    const cart = this;

    const lineItem = cart.lineItems.find((lineItem) => {
        return lineItem.item._id.equals(itemId);
    });

    if (lineItem && newQty <= 0) {
        lineItem.deleteOne();
    } else if (lineItem) {
        lineItem.qty = newQty;
    }

    return cart.save();
}

module.exports = mongoose.model('Order', orderSchema);
