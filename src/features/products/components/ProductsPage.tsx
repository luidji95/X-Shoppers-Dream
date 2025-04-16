import { isCancelledError, useQuery } from "@tanstack/react-query";
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
    price: "3099.99",
    freeShipping: false,
  });

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: ["all-products"],
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

  const filteredProducts = products?.filter((product) => {
    const matchesSearch =
      filters.search === "" ||
      product.name.toLowerCase().includes(filters.search.toLowerCase());

    const matchesCategory =
      filters.category === "All" || product.category === filters.category;

    const matchesCompany =
      filters.company === "All" || product.company === filters.company;

    const matchesColor =
      filters.color === "All" || product.colors.includes(filters.color);

    const matchesPrice = product.price <= Number(filters.price);

    const matchesShipping = !filters.freeShipping || product.shipping;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesCompany &&
      matchesColor &&
      matchesPrice &&
      matchesShipping
    );
  });

  return (
    <div className="products-page">
      <div className="products-header"></div>
      <div className="products-filter">
        <ProductFilter onFilterChange={setFilters} />
      </div>

      <div className="products-grid">
        {filteredProducts?.map((item) => (
          <Product key={item.id} product={item} variant="list" />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
