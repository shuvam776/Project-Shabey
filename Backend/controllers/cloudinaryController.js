import { uploadToCloudinary } from "../config/cloudinary.js";

export const uploadImage = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    
    // req.file.path is available if using multer diskStorage
    // or req.file.buffer if using memoryStorage
    const result = await uploadToCloudinary(file.path);
    
    return res.status(200).json({ 
      message: "Image uploaded successfully", 
      url: result.secure_url 
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return res.status(500).json({ message: "Failed to upload image", error: error.message });
  }
};