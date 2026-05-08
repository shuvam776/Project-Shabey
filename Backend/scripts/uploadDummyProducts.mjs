import { v2 as cloudinary } from "cloudinary";
import axios from "axios";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadProducts() {
  try {
    console.log("Fetching products from DummyJSON...");
    const { data } = await axios.get("https://dummyjson.com/products?limit=100");
    const products = data.products;

    const results = [];

    for (const p of products) {
      console.log(`Processing product: ${p.title} (ID: ${p.id})`);
      
      try {
        // Simple delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));

        // Upload thumbnail
        console.log(`  Uploading thumbnail...`);
        const thumbRes = await cloudinary.uploader.upload(p.thumbnail, {
          public_id: `shabey/products/p${p.id}_thumb`,
          overwrite: true,
          resource_type: "image",
        });

        // Upload main image
        console.log(`  Uploading main image...`);
        const mainRes = await cloudinary.uploader.upload(p.images[0], {
          public_id: `shabey/products/p${p.id}_main`,
          overwrite: true,
          resource_type: "image",
        });

        results.push({
          id: p.id,
          title: p.title,
          cloudinaryThumbnail: thumbRes.secure_url,
          cloudinaryImage: mainRes.secure_url,
        });

        console.log(`  ✅ Done: ${thumbRes.secure_url}`);
      } catch (err) {
        console.error(`  ❌ Failed for product ${p.id}: ${err.message}`);
        // If it's a config error, log more info
        if (err.message.includes("api_key")) {
          console.log("Config state:", cloudinary.config());
        }
      }
    }

    console.log("\n\n======== FINAL CLOUDINARY PRODUCT MAP ========");
    console.log(JSON.stringify(results, null, 2));
    
  } catch (err) {
    console.error("Error fetching products:", err.message);
  }
}

uploadProducts();
