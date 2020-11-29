import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';
import path from 'path';

dotenv.config({ path: '../.env' });

console.log(process.env.MONGO_URI);

connectDB();

const importData = async () => {
  try {
    // Clear DB
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // Insert Users into DB and get the array of Users
    const createdUsers = await User.insertMany(users);

    // Grab the first user from the user list, which is the Admin
    const adminUser = createdUsers[0]._id;

    // Associate the Admin User to each product
    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    // Insert Products into DB
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
