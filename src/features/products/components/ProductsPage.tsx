import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../api/productsServices";
import Product from "./Product";
import "./productsPage.css";
import Loading from "../../../components/ui/Loading";
import ProductFilter from "./ProductFilters";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["all-products"],
    queryFn: fetchAllProducts,
    staleTime: 1000 * 60 * 5,
  });
  console.log("Svi fetchovani proizvodi", products);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);
  console.log("Filtered kopija sa kojom radim", products);

  if (isLoading) return <Loading />;
  if (isError) return <p>Error: {error.message}</p>;
  if (!products) return <p>No products found.</p>;

  return (
    <div className="products-page">
      <div className="products-filter">
        <ProductFilter
          products={products}
          setFilteredProducts={setFilteredProducts}
        />
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Product key={item.id} product={item} variant="list" />
          ))
        ) : (
          <p>No products match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
