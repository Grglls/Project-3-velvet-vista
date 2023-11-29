const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  size: { type: String},
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number },
  image: { type: String }
}, {
  timestamps: true
});

module.exports = itemSchema;
