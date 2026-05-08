import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const images = [
  { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop", id: "cat_living_room" },
  { url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600&auto=format&fit=crop", id: "cat_dining" },
  { url: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=600&auto=format&fit=crop", id: "cat_workspace" },
  { url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format&fit=crop", id: "trend_tote" },
  { url: "https://images.unsplash.com/photo-1581519176099-8f7e4e64e9c2?q=80&w=600&auto=format&fit=crop", id: "trend_candle" },
];

async function uploadAll() {
  const results = {};
  for (const img of images) {
    try {
      process.stdout.write(`Uploading ${img.id}... `);
      const res = await cloudinary.uploader.upload(img.url, {
        public_id: `shabey/home/${img.id}`,
        overwrite: true,
        resource_type: "image",
      });
      results[img.id] = res.secure_url;
      console.log(` ${res.secure_url}`);
    } catch (err) {
      console.error(` Failed ${img.id}: ${err.message}`);
    }
  }
  console.log("\n======== RETRY RESULTS ========");
  console.log(JSON.stringify(results, null, 2));
}

uploadAll();
