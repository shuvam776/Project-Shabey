import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// All images used across HomeHero, HomeCategories, HomeTrending
const images = [
  // HomeHero mosaic
  { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop", id: "hero_sofa" },
  { url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600&auto=format&fit=crop", id: "hero_kitchen" },
  { url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=600&auto=format&fit=crop", id: "hero_bedroom" },
  { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop", id: "hero_living" },
  { url: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=600&auto=format&fit=crop", id: "hero_fashion" },
  { url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop", id: "hero_watch" },

  // HomeCategories
  { url: "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=600&auto=format&fit=crop", id: "cat_living_room" },
  { url: "https://images.unsplash.com/photo-1617806118233-f8e187c42b9c?q=80&w=600&auto=format&fit=crop", id: "cat_dining" },
  { url: "https://images.unsplash.com/photo-1518455027359-f3f816b1a22a?q=80&w=600&auto=format&fit=crop", id: "cat_workspace" },
  { url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop", id: "cat_fashion" },
  { url: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=600&auto=format&fit=crop", id: "cat_electronics" },
  { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=600&auto=format&fit=crop", id: "cat_outdoors" },

  // HomeTrending
  { url: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=600&auto=format&fit=crop", id: "trend_lamp" },
  { url: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=600&auto=format&fit=crop", id: "trend_mug" },
  { url: "https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=600&auto=format&fit=crop", id: "trend_earbuds" },
  { url: "https://images.unsplash.com/photo-1614671750405-26cc5ee576a4?q=80&w=600&auto=format&fit=crop", id: "trend_tote" },
  { url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop", id: "trend_wallet" },
  { url: "https://images.unsplash.com/photo-1602607961954-4a15a01c16e5?q=80&w=600&auto=format&fit=crop", id: "trend_candle" },
  { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop", id: "trend_sneakers" },
  { url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop", id: "trend_sunglasses" },
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

  console.log("\n\n======== FINAL URL MAP ========");
  console.log(JSON.stringify(results, null, 2));
}

uploadAll();
