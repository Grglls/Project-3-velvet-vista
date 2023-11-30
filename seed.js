require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([

    // {name: 'Dresses', sortOrder: 10},
    // {name: 'Tops', sortOrder: 20},
    // {name: 'Pants', sortOrder: 30},
    // {name: 'Denim', sortOrder: 40},
    // {name: 'Jackets', sortOrder: 50},

    {name: 'Dress', sortOrder: 10},
    {name: 'Top', sortOrder: 20},
    {name: 'Pant', sortOrder: 30},
    {name: 'Denim', sortOrder: 40},
    {name: 'Jacket', sortOrder: 50},

  ]);

  await Item.deleteMany({});
  const items = await Item.create([

    // {name: 'Dress 1', emoji: '👗', category: categories[0], sizes: ['S', 'M', 'L'], price: 59.99},
    // {name: 'Dress 2', emoji: '👗', category: categories[0], sizes: ['S', 'M', 'L'], price: 69.99},
    // {name: 'Dress 3', emoji: '👗', category: categories[0], sizes: ['S', 'M', 'L'], price: 79.99},
    // {name: 'Dress 4', emoji: '👗', category: categories[0], sizes: ['S', 'M', 'L'], price: 89.99},
    // {name: 'Dress 5', emoji: '👗', category: categories[0], sizes: ['S', 'M', 'L'], price: 99.99},
    // {name: 'Top 1', emoji: '👚', category: categories[1], sizes: ['S', 'M', 'L'], price: 59.99},
    // {name: 'Top 2', emoji: '👚', category: categories[1], sizes: ['S', 'M', 'L'], price: 69.99},
    // {name: 'Top 3', emoji: '👚', category: categories[1], sizes: ['S', 'M', 'L'], price: 79.99},
    // {name: 'Top 4', emoji: '👚', category: categories[1], sizes: ['S', 'M', 'L'], price: 89.99},
    // {name: 'Top 5', emoji: '👚', category: categories[1], sizes: ['S', 'M', 'L'], price: 99.99},
    // {name: 'Pants 1', emoji: '🩲', category: categories[2], sizes: ['S', 'M', 'L'], price: 59.99},
    // {name: 'Pants 2', emoji: '🩲', category: categories[2], sizes: ['S', 'M', 'L'], price: 69.99},
    // {name: 'Pants 3', emoji: '🩲', category: categories[2], sizes: ['S', 'M', 'L'], price: 79.99},
    // {name: 'Pants 4', emoji: '🩲', category: categories[2], sizes: ['S', 'M', 'L'], price: 89.99},
    // {name: 'Pants 5', emoji: '🩲', category: categories[2], sizes: ['S', 'M', 'L'], price: 99.99},
    // {name: 'Denim 1', emoji: '👖', category: categories[3], sizes: ['S', 'M', 'L'], price: 159.99},
    // {name: 'Denim 2', emoji: '👖', category: categories[3], sizes: ['S', 'M', 'L'], price: 169.99},
    // {name: 'Denim 3', emoji: '👖', category: categories[3], sizes: ['S', 'M', 'L'], price: 179.99},
    // {name: 'Denim 4', emoji: '👖', category: categories[3], sizes: ['S', 'M', 'L'], price: 189.99},
    // {name: 'Denim 5', emoji: '👖', category: categories[3], sizes: ['S', 'M', 'L'], price: 199.99},
    // {name: 'Jacket 1', emoji: '🧥', category: categories[4], sizes: ['S', 'M', 'L'], price: 259.99},
    // {name: 'Jacket 2', emoji: '🧥', category: categories[4], sizes: ['S', 'M', 'L'], price: 269.99},
    // {name: 'Jacket 3', emoji: '🧥', category: categories[4], sizes: ['S', 'M', 'L'], price: 279.99},
    // {name: 'Jacket 4', emoji: '🧥', category: categories[4], sizes: ['S', 'M', 'L'], price: 289.99},
    // {name: 'Jacket 5', emoji: '🧥', category: categories[4], sizes: ['S', 'M', 'L'], price: 299.99},

    {name: 'Brooke Silk Dress', size: 'M', category: categories[0], price: 329.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701216897/black_dress_pasmx7.webp'},
    {name: 'Briar Babywool Dress', size: 'M', category: categories[0], price: 229.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217727/red_dress_zwiapv.webp'},
    {name: 'Elliana Viscose Dress', size: 'M', category: categories[0], price: 329.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217727/flower_dress_w2wynr.webp'},
    {name: 'Andres Linen Dress', size: 'M', category: categories[0], price: 279.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217727/blue_dress_ciagj3.webp'},
    {name: 'Adrienne Linen Dress', size: 'M', category: categories[0], price: 279.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217727/green_dress_rtbpax.webp'},
    {name: 'Vivienne Tee', size: 'M', category: categories[1], price: 129.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217809/1_top_qdqdwv.webp'},
    {name: 'Andres Bamboo Tee', size: 'M', category: categories[1], price: 129.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217809/2_top_jf1tjb.webp'},
    {name: 'Kate Silk Top', size: 'M', category: categories[1], price: 99.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217809/3_top_vjbbvc.webp'},
    {name: 'Cassidy Cotton Crinkle Top', size: 'M', category: categories[1], price: 129.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217810/4_top_vcd0by.webp'},
    {name: 'Ophelia Silk Shirt', size: 'M', category: categories[1], price: 159.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217810/5_top_uopy4u.webp'},
    {name: 'Bengaline Full Length Pant', size: 'M', category: categories[2], price: 139.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217821/2_pant_mjtqkx.webp'},
    {name: 'Sarah Compact Cotton Pant', size: 'M', category: categories[2], price: 139.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217821/1_pant_lfjdgg.webp'},
    {name: 'Benedict Belted Pant', size: 'M', category: categories[2], price: 189.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217822/3_pant_u2heqi.webp'},
    {name: 'Haven Pant', size: 'M', category: categories[2], price: 159.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217822/4_pant_eimqpf.webp'},
    {name: 'Simona Suit Pant', size: 'M', category: categories[2], price: 99.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217822/5_pant_zjmaic.webp'},
    {name: 'Kennedy Coated High Rise Jean', size: 'M', category: categories[3], price: 159.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217834/1_denim_qqnjsf.webp'},
    {name: 'Arden Wide Leg Jean', size: 'M', category: categories[3], price: 129.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217834/2_denim_ofkpej.webp'},
    {name: 'Estelle Wide Crop Jean', size: 'M', category: categories[3], price: 129.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217835/3_denim_m1bzsx.webp'},
    {name: 'Lou Denim Mini Skirt', size: 'M', category: categories[3], price: 99.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217835/4_denim_slrnrd.webp'},
    {name: 'Connie Cotton Short', size: 'M', category: categories[3], price: 99.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701217836/5_denim_eieb2n.webp'},
    {name: 'Stevie Jacket', size: 'M', category: categories[4], price: 279.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701218790/1_jacket_ylzhyk.webp'},
    {name: 'Mardy Jacket', size: 'M', category: categories[4], price: 299.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701218790/4_jacket_tevfiw.webp'},
    {name: 'Mavie Cropped Jacket', size: 'M', category: categories[4], price: 259.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701218790/5_jacket_jt3d42.webp'},
    {name: 'Raina Blazer', size: 'M', category: categories[4], price: 279.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701218790/3_jacket_ugq9yz.webp'},
    {name: 'Chaya Cropped Linen Blazer', size: 'M', category: categories[4], price: 259.00, image: 'https://res.cloudinary.com/dz9ufxjca/image/upload/v1701218790/2_jacket_p8rtv3.webp'},

  ]);

  console.log(items)

  process.exit();

})();
