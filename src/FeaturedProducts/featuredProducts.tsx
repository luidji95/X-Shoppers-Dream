import { useQuery } from "@tanstack/react-query";
import fetchThreeProducts from "../Api/productsServices";
import Product from "../ProductCard/productCard";

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

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="featured-main">
      <div className="fetured-text">
        <h2>Featured Products</h2>
        <p>The art of modern living unlocked.</p>
      </div>
      <div className="product-representation">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
