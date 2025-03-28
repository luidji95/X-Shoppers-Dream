import { isCancelledError, useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../api/productsServices";
import Product from "./Product";
import "./featuredProducts.css";
import "./productsPage.css";
import Loading from "../../../components/ui/Loading";

const ProductsPage = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
    staleTime: 1000 * 6 * 5,
  });

  if (isLoading)
    return (
      <p>
        <Loading />
      </p>
    );
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="products-page">
      <div className="products-header">
        <h3>{products?.length} products found</h3>
        <div className="underline"></div>
      </div>

      <div className="products-grid">
        {products?.map((item) => (
          <Product key={item.id} product={item} variant="list" />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
