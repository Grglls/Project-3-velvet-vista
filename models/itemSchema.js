const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },

  // category: {type: Schema.Types.ObjectId, ref: 'Category'},
  // price: { type: Number, required: true },
  // sizes: [{
  //   type: String,
  //   required: true
  // }],
  // images: [{ type: String }]

  size: { type: String},
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number },
  image: { type: String }
}, {
  timestamps: true
});

module.exports = itemSchema;