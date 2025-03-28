import { useQuery } from "@tanstack/react-query";
import { fetchThreeProducts } from "../api/productsServices";
import type { Product } from "../types";
import Product from "./Product";
import { useState } from "react";
import "./featuredProducts.css";
import Loading from "../../../components/ui/Loading";

const FeaturedProduct = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchThreeProducts,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading)
    return (
      <p>
        <Loading />
      </p>
    );
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="featured-main">
      <div className="fetured-text">
        <h2 className="featured-products-h2">Featured Products</h2>
        <p className="featured-products-p">
          The art of modern living unlocked.
        </p>
      </div>
      <div className="product-representation">
        {products?.map((product) => (
          <Product key={product.id} product={product} variant="featured" />
        ))}
      </div>
      <div className="allproducts-div">
        <button className="allproducts-button">All products</button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
