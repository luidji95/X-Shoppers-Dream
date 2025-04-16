import { useEffect, useState } from "react";
import "./productsFilter.css";
import Button from "../../../components/ui/Button";

type ProductFilterProp = {
  onFilterChange: (filters: {
    search: string;
    category: string;
    company: string;
    color: string;
    price: string;
    freeShipping: boolean;
  }) => void;
};

const ProductFilter = ({ onFilterChange }: ProductFilterProp) => {
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("All");
  const [company, setCompany] = useState("All");
  const [color, setColor] = useState("All");
  const [price, setPrice] = useState("3099.99");
  const [freeShipping, setFreeShipping] = useState(false);

  const handleClearFilters = () => {
    setSearchInput("");
    setCategory("All");
    setCompany("All");
    setColor("All");
    setPrice("3099.99");
    setFreeShipping(false);
  };

  useEffect(() => {
    onFilterChange({
      search: searchInput,
      category,
      company,
      color,
      price,
      freeShipping,
    });
  }, [searchInput, category, company, color, price, freeShipping]);

  return (
    <div className="product-filter-main">
      {/* Search */}
      <div className="search-input">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      {/* Category */}
      <div className="filter-category">
        <p className="filter-title">Category</p>
        <div className="category-items">
          {[
            "All",
            "Living Room",
            "Bedroom",
            "Office",
            "Kids",
            "Dining",
            "Kitchen",
          ].map((cat) => (
            <span
              key={cat}
              onClick={() => setCategory(cat)}
              className={category === cat ? "active" : ""}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Company */}
      <div className="filter-company">
        <p className="filter-title">Company</p>
        <select value={company} onChange={(e) => setCompany(e.target.value)}>
          {["All", "Ikea", "Liddy", "Marcos", "Caressa"].map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Color */}
      <div className="filter-color">
        <p className="filter-title">Color</p>
        <div className="color-options">
          {["All", "#000", "#00f", "#0f0", "#ff0", "#f00", "#f7c"].map((c) => (
            <span
              key={c}
              onClick={() => setColor(c)}
              className={`color-circle ${color === c ? "active" : ""}`}
              style={{
                backgroundColor: c !== "All" ? c : "transparent",
                border: c === "All" ? "1px solid black" : "none",
              }}
            >
              {c === "All" ? "All" : ""}
            </span>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="filter-price">
        <p className="filter-title">Price</p>
        <p className="price-value">
          $
          {Number(price).toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </p>
        <input
          type="range"
          min={0}
          max={3099.99}
          step={0.01}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      {/* Shipping */}
      <div className="filter-shipping">
        <label>
          Free shipping{" "}
          <input
            type="checkbox"
            checked={freeShipping}
            onChange={() => setFreeShipping(!freeShipping)}
          />
        </label>
      </div>

      {/* Clear */}
      <div className="reset-filters">
        <Button variant="danger" onClick={handleClearFilters}>
          Clear filters
        </Button>
      </div>
    </div>
  );
};

export default ProductFilter;
