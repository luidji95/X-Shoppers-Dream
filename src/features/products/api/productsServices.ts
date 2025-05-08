import type { Product } from "../types";

export const fetchThreeProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(
      `https://www.course-api.com/react-store-products`
    );
    if (!response.ok) throw new Error(`Failed to fetch products`);

    const data = await response.json();
    // console.log(data);
    return data.slice(0, 3).map((product) => ({
      id: product.id,
      image: product.image,
      price: product.price,
      name: product.name,
      description: product.description,
      category: product.category,
      colors: product.colors,
      company: product.company,
      shipping: product.shipping,
    }));
  } catch (error) {
    console.log(`Error fethcing products`, error);
    return [];
  }
};

export const fetchAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(
      `https://www.course-api.com/react-store-products`
    );

    if (!response.ok) throw new Error("Failed to fetch products");

    const data = await response.json();
    return data.map((product) => ({
      id: product.id,
      image: product.image,
      price: product.price,
      name: product.name,
      description: product.description,
      category: product.category,
      colors: product.colors,
      company: product.company,
      shipping: product.shipping,
    }));
  } catch (error) {
    console.log(`Error fetching products`, error);
    return [];
  }
};

import type { Product } from "../types";

export const fetchSingleProductDetails = async (
  productId: string
): Promise<Product> => {
  try {
    const response = await fetch(
      `https://www.course-api.com/react-store-single-product?id=${productId}`
    );

    if (!response.ok) throw new Error("Failed to fetch single product");

    const product: Product = await response.json();
    console.log("Fetched single product:", product);
    return product;
  } catch (error) {
    console.error("Error fetching single product details:", error);
    throw error;
  }
};
