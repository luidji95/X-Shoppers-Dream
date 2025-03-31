import { useState } from "react";
import "./productsFilter.css";
import Button from "../../../components/ui/Button";

const ProductFilter = () => {
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [freeShipping, setFreeShipping] = useState(false);

  const handleCategoryClick = (value: string) => {
    setCategory(value);
  };

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
        <p>Category</p>
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
            <button
              key={cat}
              className={category === cat ? "active" : ""}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Reset */}
      <div className="reset-filters">
        <Button variant="danger">Clear filters</Button>
      </div>
    </div>
  );
};

export default ProductFilter;
