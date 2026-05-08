import mongoose from "mongoose";
export const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String,
    quantity: Number,
    category: String,
    seller: String,
    rating: Number,
    numberOfReviews: Number,
    
})
const Product = mongoose.model("Product", productSchema);
export default Product;