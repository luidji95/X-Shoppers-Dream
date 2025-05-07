import { useState, useEffect } from "react";
import "./productsFilter.css";
import Button from "../../../components/ui/Button";
import type { Product } from "../types";
import CategoryFilters from "./ProductFiltersParts.tsx/CategoryFilters";
import CompanyFilter from "./ProductFiltersParts.tsx/CompanyFilters";
import ColorFilter from "./ProductFiltersParts.tsx/ColorFilters";

type ProductFilterProps = {
  products: Product[];
  setFilteredProducts: (products: Product[]) => void;
};

const ProductFilter = ({
  products,
  setFilteredProducts,
}: ProductFilterProps) => {
  const [filters, setFilters] = useState({
    searchInput: "",
    category: "All",
    company: "All",
    color: "All",
    price: 0,
    maxPrice: 0,
    freeShipping: false,
  });

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const companies = ["All", ...new Set(products.map((p) => p.company))];
  const colors = ["All", ...new Set(products.flatMap((p) => p.colors))];

  useEffect(() => {
    if (products.length) {
      const maxProductPrice = Math.max(...products.map((p) => p.price));
      setFilters((prev) => ({
        ...prev,
        price: maxProductPrice,
        maxPrice: maxProductPrice,
      }));
    }
  }, [products]);

  const updateFilters = (name: string, value: string | number | boolean) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFilterChange = () => {
    let filtered = [...products];

    if (filters.searchInput) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(filters.searchInput.toLowerCase())
      );
    }

    if (filters.category !== "All") {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    if (filters.company !== "All") {
      filtered = filtered.filter(
        (p) => p.company.toLowerCase() === filters.company.toLowerCase()
      );
    }

    if (filters.color !== "All") {
      filtered = filtered.filter((p) => p.colors.includes(filters.color));
    }

    filtered = filtered.filter((p) => p.price <= filters.price);

    if (filters.freeShipping) {
      filtered = filtered.filter((p) => p.shipping === true);
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    handleFilterChange();
  }, [filters, products]);

  return (
    <div className="product-filter-main">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search"
          value={filters.searchInput}
          onChange={(e) => updateFilters("searchInput", e.target.value)}
        />
      </div>

      <CategoryFilters
        selectedCategory={filters.category}
        categories={categories}
        updateFilters={updateFilters}
      />

      <CompanyFilter
        selectedCompany={filters.company}
        companies={companies}
        updateFilters={updateFilters}
      />

      <ColorFilter
        selectedColor={filters.color}
        colors={colors}
        updateFilters={updateFilters}
      />

      {/* <div className="filter-category">
        <p className="filter-title">Category</p>
        <div className="category-items">
          {categories.map((cat) => (
            <span
              key={cat}
              onClick={() => updateFilters("category", cat)}
              className={filters.category === cat ? "active" : ""}
            >
              {cat}
            </span>
          ))}
        </div>
      </div> */}

      {/* <div className="filter-company">
        <p className="filter-title">Company</p>
        <select
          value={filters.company}
          onChange={(e) => updateFilters("company", e.target.value)}
        >
          {companies.map((c) => (
            <option key={c} value={c}>
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-color">
        <p className="filter-title">Color</p>
        <div className="color-options">
          {colors.map((c) => (
            <span
              key={c}
              onClick={() => updateFilters("color", c)}
              className={`color-circle ${filters.color === c ? "active" : ""}`}
              style={{
                backgroundColor: c !== "All" ? c : "transparent",
                border: c === "All" ? "1px solid black" : "none",
              }}
            >
              {c === "All" ? "All" : ""}
            </span>
          ))}
        </div>
      </div> */}

      <div className="filter-price">
        <p className="filter-title">Price</p>
        <p className="price-value">
          $
          {filters.price.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
        <input
          type="range"
          min={0}
          max={filters.maxPrice}
          step={1}
          value={filters.price}
          onChange={(e) => updateFilters("price", Number(e.target.value))}
        />
      </div>

      <div className="filter-shipping">
        <label>
          Free shipping
          <input
            type="checkbox"
            checked={filters.freeShipping}
            onChange={() =>
              updateFilters("freeShipping", !filters.freeShipping)
            }
          />
        </label>
      </div>

      <div className="reset-filters">
        <Button
          variant="danger"
          onClick={() =>
            setFilters((prev) => ({
              ...prev,
              searchInput: "",
              category: "All",
              company: "All",
              color: "All",
              price: filters.maxPrice,
              freeShipping: false,
            }))
          }
        >
          Clear filters
        </Button>
      </div>
    </div>
  );
};

export default ProductFilter;
