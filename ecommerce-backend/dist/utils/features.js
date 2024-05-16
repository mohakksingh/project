import mongoose from "mongoose";
import { myCache } from "../app.js";
import { Product } from "../models/product.js";
export const connectDB = (uri) => {
    mongoose.connect(uri, {
        dbName: "Ecommerce_24",
    }).then(c => console.log(`DB connecred to ${c.connection.host}`))
        .catch(e => console.log(e));
};
export const invalidatesCache = async ({ product, order, admin }) => {
    if (product) {
        const productKeys = ["latest-products", "categories", "all-products"];
        const products = await Product.find({}).select("_id");
        products.forEach(i => {
            productKeys.push(`product-${i._id}`);
        });
        myCache.del(productKeys);
    }
};
