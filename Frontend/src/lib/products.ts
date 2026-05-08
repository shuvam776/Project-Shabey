const url = "https://dummyjson.com";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  image?: string;
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

//api calling
export async function fetchProducts(limit: number = 20, skip: number = 0) {
  const response = await fetch(`${url}/products?limit=${limit}&skip=${skip}`);
  const data = await response.json();
  return data as ProductResponse;
}

//api for single product
export async function fetchProduct(id: number) {
  const response = await fetch(`${url}/products/${id}`);
  const data = await response.json();
  return data as Product;
}

//api for all catagories
export async function fetchCategories() {
  const response = await fetch(`${url}/products/categories`);
  const data = await response.json();
  return data as string[];
}

//api for category products
export async function fetchCategoryProducts(category: string, limit: number = 20, skip: number = 0) {
  const response = await fetch(`${url}/products/category/${category}?limit=${limit}&skip=${skip}`);
  const data = await response.json();
  return data as ProductResponse;
}
export async function searchProducts(query: string, limit: number = 20, skip: number = 0) {
  const response = await fetch(`${url}/products/search?q=${query}&limit=${limit}&skip=${skip}`);
  const data = await response.json();
  return data as ProductResponse;
}