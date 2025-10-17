import type { Product } from "../types";

type RawProduct = {
  id: string;
  image: string;
  price: number;
  name: string;
  description: string;
  category: string;
  colors: string[];
  company: string;
  shipping: boolean;
};

const API_ALL = "https://www.course-api.com/react-store-products";
const API_SINGLE = "https://www.course-api.com/react-store-single-product";

function mapRaw(p: RawProduct): Product {
  return {
    id: p.id,
    image: p.image,
    price: p.price,
    name: p.name,
    description: p.description,
    category: p.category,
    colors: p.colors ?? [],
    company: p.company,
    shipping: Boolean(p.shipping),
  };
}

export const fetchThreeProducts = async (): Promise<Product[]> => {
  const ac = new AbortController();
  try {
    const res = await fetch(API_ALL, { signal: ac.signal });
    if (!res.ok) throw new Error("Failed to fetch products");
    const data: RawProduct[] = await res.json();
    return data.slice(0, 3).map(mapRaw);
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
};

export const fetchAllProducts = async (): Promise<Product[]> => {
  const ac = new AbortController();
  try {
    const res = await fetch(API_ALL, { signal: ac.signal });
    if (!res.ok) throw new Error("Failed to fetch products");
    const data: RawProduct[] = await res.json();
    return data.map(mapRaw);
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
};

export const fetchSingleProductDetails = async (
  productId: string
): Promise<Product> => {
  const ac = new AbortController();
  try {
    const url = `${API_SINGLE}?id=${encodeURIComponent(productId)}`;
    const res = await fetch(url, { signal: ac.signal });
    if (!res.ok) throw new Error("Failed to fetch single product");
    const raw: RawProduct = await res.json();
    return mapRaw(raw);
  } catch (err) {
    console.error("Error fetching single product details:", err);
    throw err;
  }
};
