import { uploadToCloudinary } from "../config/cloudinary.js";
import fs from "fs/promises";

export const uploadImage = async (req, res) => {
  const filePath = req.file?.path;
  try {
    if (!filePath) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    
    const result = await uploadToCloudinary(filePath);
    
    // Clean up local file after successful upload
    await fs.unlink(filePath).catch(err => console.error("Failed to delete local file:", err));

    return res.status(200).json({ 
      message: "Image uploaded successfully", 
      url: result.secure_url 
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    
    // Clean up local file on error if it exists
    if (filePath) {
      await fs.unlink(filePath).catch(err => console.error("Failed to delete local file after error:", err));
    }

    return res.status(500).json({ message: "Failed to upload image", error: error.message });
  }
};