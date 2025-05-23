import { useQuery } from "@tanstack/react-query";
import { fetchThreeProducts } from "../api/productsServices";

import Product from "./Product";
import "./featuredProducts.css";
import Loading from "../../../components/ui/Loading";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "../../../useIntersectionObserver";

const FeaturedProduct = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleNavigateToProducts = () => {
    navigate("/products");
  };

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: ["featured-products"],
    queryFn: fetchThreeProducts,
    staleTime: 1000 * 60 * 5,
  });

  useIntersectionObserver(sectionRef);

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="featured-main borderbottom slide-init" ref={sectionRef}>
      <div className="fetured-text">
        <h2 className="featured-products-h2">Featured Products</h2>
        <p className="featured-products-p">
          The art of modern living unlocked.
        </p>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="product-representation">
            {products?.map((product) => (
              <Product key={product.id} product={product} variant="featured" />
            ))}
          </div>

          <div className="allproducts-div">
            <Button variant="primary" onClick={handleNavigateToProducts}>
              All products
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedProduct;
