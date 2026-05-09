import { useState, useEffect } from "react";
import type { ProductResponse, Product } from "./products";
import { fetchProducts } from "./products";
//use for fetching products
export function useProducts(limit: number = 20, skip: number = 0) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    let mounted = true;
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts(limit, skip);
        if (mounted) {
          const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "dpju1wia5";
          const processedProducts = data.products.map(p => {
            // If it's one of the first 100 products, use the direct upload links we just created
            if (p.id <= 100) {
              const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/shabey/products/`;
              return {
                ...p,
                thumbnail: `${baseUrl}p${p.id}_thumb`,
                image: `${baseUrl}p${p.id}_main`
              };
            }

            // Otherwise, keep using the fetch API as fallback
            const cloudinaryFetchPrefix = `https://res.cloudinary.com/${cloudName}/image/fetch/f_auto,q_auto/`;
            return {
              ...p,
              thumbnail: p.thumbnail ? `${cloudinaryFetchPrefix}${p.thumbnail}` : undefined,
              image: p.image ? `${cloudinaryFetchPrefix}${p.image}` : (p.thumbnail ? `${cloudinaryFetchPrefix}${p.thumbnail}` : undefined)
            };
          });
          setProducts(processedProducts);
          setHasMore(data.total > skip + data.products.length);
        }
      } catch (error) {
        if (mounted) {
          setError(error as Error);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };
    getProducts();
    return () => { mounted = false; };
  }, [limit, skip]);
  return { products, loading, error, hasMore };
}