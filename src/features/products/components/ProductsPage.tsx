import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../api/productsServices";
import Product from "./Product";
import "./featuredProducts.css";
import "./productsPage.css";
import Loading from "../../../components/ui/Loading";
import ProductFilter from "./ProductFilters";
import { useState } from "react";

const ProductsPage = () => {
  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    company: "All",
    color: "All",
    price: 3099.99,
    freeShipping: false,
  });

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

  const filteredProducts = products?.filter((product) => {
    const matchesSearch =
      filters.search === "" ||
      product.name.toLowerCase().includes(filters.search.toLowerCase());

    const matchesCategory =
      filters.category === "All" ||
      product.category.toLowerCase() === filters.category.toLowerCase();

    const matchesCompany =
      filters.company === "All" ||
      product.company.toLowerCase() === filters.company.toLowerCase();

    const matchesColor =
      filters.color === "All" || product.colors.includes(filters.color);

    const matchesPrice = product.price <= Number(filters.price);

    const matchesShipping = !filters.freeShipping || product.shipping === true;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesCompany &&
      matchesColor &&
      matchesPrice &&
      matchesShipping
    );
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="products-page">
      <div className="products-filter">
        <ProductFilter onFilterChange={setFilters} />
      </div>

      <div className="products-grid">
        {filteredProducts?.length ? (
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
