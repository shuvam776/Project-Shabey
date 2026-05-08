import Product from "../models/productModel.js";

export const productController=async(req,res)=>{
    try {
        const {name,price,image,description,quantity,category,seller,rating,numberOfReviews }=req.body;
        if(!name || !price || !image || !description){
            return res.status(400).json({success:false,message:"Please provide all the details"});
        }
        
        const product=new Product({name,price,image,description,quantity,category,seller,rating,numberOfReviews});
        if(Product.find(product)){
            return res.status(400).json({success:false,message:"Product already exists"});
        }
        await product.save();
        res.status(200).json({success:true,message:"Product added successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
}