import mongoose from "mongoose";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./model/usermodel.js";
import Product from "./model/Productmodel.js";
import Order from "./model/ordermodel.js";

import connectDB from "./Config/db.js";

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const createUser = await User.insertMany(users); // Corrected here
        const sampleProduct = await Product.insertMany(products);

        console.log("Data imported");

        process.exit();

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        console.log("Data destroyed");

        process.exit();

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}
