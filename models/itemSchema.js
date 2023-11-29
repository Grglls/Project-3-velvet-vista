const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true},
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: { type: Number, required: true },
  size: {type: String}
}, {
  timestamps: true
});

module.exports = itemSchema;
