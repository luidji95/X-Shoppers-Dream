// ✅ ProductsPage.tsx
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../api/productsServices";
import Product from "./Product";
import "./productsPage.css";
import Loading from "../../../components/ui/Loading";
import ProductFilter from "./ProductFilters";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProducts } from "../../../redux/slices/productsSlice";
import type { Product as ProductType } from "../types";

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

  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [sortOrder, setSortOrder] = useState("lowest");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
      dispatch(setProducts(products));
    }
  }, [products, dispatch]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const order = e.target.value;
    setSortOrder(order);
    const sorted = [...filteredProducts].sort((a, b) =>
      order === "lowest" ? a.price - b.price : b.price - a.price
    );
    setFilteredProducts(sorted);
  };

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

      <div className="products-container">
        <div className="products-all">
          <p>{filteredProducts.length} products found</p>
          <div className="single-line"></div>
          <div className="sort-container">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" value={sortOrder} onChange={handleSortChange}>
              <option value="lowest">Price (Lowest)</option>
              <option value="highest">Price (Highest)</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <Product
                key={item.id}
                product={item}
                variant="list"
                onClick={() => navigate(`/product/${item.id}`)}
              />
            ))
          ) : (
            <p>No products match your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
