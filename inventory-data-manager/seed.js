// Optional: npm run seed  -> inserts 12 demo products
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const data = [
  { name: 'Study Table', sku: 'FURN-TB-812', category: 'Furniture', price: 3999, quantity: 2, reorderLevel: 4, supplier: 'IKEA India' },
  { name: 'Ergonomic Office Chair', sku: 'FURN-CH-101', category: 'Furniture', price: 5499, quantity: 15, reorderLevel: 5, supplier: 'Godrej Interio' },
  { name: 'Laptop 15"', sku: 'ELEC-LP-001', category: 'Electronics', price: 55000, quantity: 3, reorderLevel: 5, supplier: 'Dell' },
  { name: 'Wireless Optical Mouse', sku: 'ELEC-MS-002', category: 'Electronics', price: 799, quantity: 60, reorderLevel: 15, supplier: 'Logitech' },
  { name: 'Bluetooth Speaker', sku: 'ELEC-SP-003', category: 'Electronics', price: 2499, quantity: 25, reorderLevel: 10, supplier: 'boAt' },
  { name: 'Smartphone', sku: 'ELEC-PH-004', category: 'Electronics', price: 18999, quantity: 8, reorderLevel: 10, supplier: 'Samsung' },
  { name: 'Round Neck T-Shirt', sku: 'APRL-TS-201', category: 'Apparel', price: 499, quantity: 50, reorderLevel: 20, supplier: 'Allen Solly' },
  { name: 'Denim Jeans', sku: 'APRL-JN-202', category: 'Apparel', price: 2299, quantity: 28, reorderLevel: 10, supplier: "Levi's" },
  { name: 'Ruled Notebook A4', sku: 'STNY-NB-701', category: 'Stationery', price: 60, quantity: 200, reorderLevel: 50, supplier: 'Classmate' },
  { name: 'Gel Pen Pack of 15', sku: 'STNY-PN-713', category: 'Stationery', price: 120, quantity: 8, reorderLevel: 20, supplier: 'Cello Pens' },
  { name: 'Basmati Rice 5kg', sku: 'GROC-RC-301', category: 'Grocery', price: 650, quantity: 40, reorderLevel: 15, supplier: 'India Gate' },
  { name: 'Olive Oil 1L', sku: 'GROC-OL-302', category: 'Grocery', price: 899, quantity: 4, reorderLevel: 10, supplier: 'Figaro' },
];

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany();
  await Product.insertMany(data);
  console.log(`Inserted ${data.length} products`);
  await mongoose.disconnect();
})();
