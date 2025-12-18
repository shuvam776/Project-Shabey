// src/data/products.ts
export const products = Array.from({ length: 30 }).map((_, i) => ({
  id: `shabey-product-${i + 1}`,
  name: `Shabey Product ${i + 1}`,
  price: Math.floor(Math.random() * 3000) + 999,
  image: `https://picsum.photos/seed/shabey${i + 1}/600/600`,
  description:
    "A precision-built digital product designed for creators who value speed, clarity, and leverage.",
}))
