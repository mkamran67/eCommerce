import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Clear DB
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // Import data

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((p) => {
      return {
        ...p,
        user: adminUser,
      };
    });

    await Product.insertMany(sampleProducts);

    console.log(`Data imported!`);
    process.exit(0);
  } catch (err) {
    console.error(`Error ${err.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // Clear DB
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log(`Data destroyed`);
    process.exit(0);
  } catch (err) {
    console.error(`Error ${err.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
