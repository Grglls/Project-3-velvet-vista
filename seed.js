require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Dresses', sortOrder: 10},
    {name: 'Tops', sortOrder: 20},
    {name: 'Pants', sortOrder: 30},
    {name: 'Denim', sortOrder: 40},
    {name: 'Jackets', sortOrder: 50},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Dress 1', emoji: '👗', category: categories[0], sizes: ['S', 'M', 'L'], price: 59.99},
    {name: 'Dress 2', emoji: '👗', category: categories[0], sizes: ['S', 'M', 'L'], price: 69.99},
    {name: 'Dress 3', emoji: '👗', category: categories[0], sizes: ['S', 'M', 'L'], price: 79.99},
    {name: 'Dress 4', emoji: '👗', category: categories[0], sizes: ['S', 'M', 'L'], price: 89.99},
    {name: 'Dress 5', emoji: '👗', category: categories[0], sizes: ['S', 'M', 'L'], price: 99.99},
    {name: 'Top 1', emoji: '👚', category: categories[1], sizes: ['S', 'M', 'L'], price: 59.99},
    {name: 'Top 2', emoji: '👚', category: categories[1], sizes: ['S', 'M', 'L'], price: 69.99},
    {name: 'Top 3', emoji: '👚', category: categories[1], sizes: ['S', 'M', 'L'], price: 79.99},
    {name: 'Top 4', emoji: '👚', category: categories[1], sizes: ['S', 'M', 'L'], price: 89.99},
    {name: 'Top 5', emoji: '👚', category: categories[1], sizes: ['S', 'M', 'L'], price: 99.99},
    {name: 'Pants 1', emoji: '🩲', category: categories[2], sizes: ['S', 'M', 'L'], price: 59.99},
    {name: 'Pants 2', emoji: '🩲', category: categories[2], sizes: ['S', 'M', 'L'], price: 69.99},
    {name: 'Pants 3', emoji: '🩲', category: categories[2], sizes: ['S', 'M', 'L'], price: 79.99},
    {name: 'Pants 4', emoji: '🩲', category: categories[2], sizes: ['S', 'M', 'L'], price: 89.99},
    {name: 'Pants 5', emoji: '🩲', category: categories[2], sizes: ['S', 'M', 'L'], price: 99.99},
    {name: 'Denim 1', emoji: '👖', category: categories[3], sizes: ['S', 'M', 'L'], price: 159.99},
    {name: 'Denim 2', emoji: '👖', category: categories[3], sizes: ['S', 'M', 'L'], price: 169.99},
    {name: 'Denim 3', emoji: '👖', category: categories[3], sizes: ['S', 'M', 'L'], price: 179.99},
    {name: 'Denim 4', emoji: '👖', category: categories[3], sizes: ['S', 'M', 'L'], price: 189.99},
    {name: 'Denim 5', emoji: '👖', category: categories[3], sizes: ['S', 'M', 'L'], price: 199.99},
    {name: 'Jacket 1', emoji: '🧥', category: categories[4], sizes: ['S', 'M', 'L'], price: 259.99},
    {name: 'Jacket 2', emoji: '🧥', category: categories[4], sizes: ['S', 'M', 'L'], price: 269.99},
    {name: 'Jacket 3', emoji: '🧥', category: categories[4], sizes: ['S', 'M', 'L'], price: 279.99},
    {name: 'Jacket 4', emoji: '🧥', category: categories[4], sizes: ['S', 'M', 'L'], price: 289.99},
    {name: 'Jacket 5', emoji: '🧥', category: categories[4], sizes: ['S', 'M', 'L'], price: 299.99},
  ]);

  console.log(items)

  process.exit();

})();
