import "./productsFilter.css";

const ProductFilter = () => {
  return (
    <div className="product-filter-main">
      <h4>Filteri za fetchovane proizvode</h4>
      <div className="search-input">
        <input type="text" placeholder="Search" />
      </div>
      <div className="filter-category">
        <p>Category</p>
        <div className="category-items">
          <p>All</p>
          <p>Living Room</p>
          <p>Bedroom</p>
          <p>Office</p>
          <p>Kids</p>
          <p>Dining</p>
          <p>Kintchen</p>
        </div>
        <div className="company-filter">
          <p>Company</p>
        </div>
        <div className="color-filter">
          <p>Color</p>
        </div>
        <div className="price-filter">
          <p>Price</p>
        </div>
        <div className="shiping-filter">
          <p>Free shiping</p>
        </div>
        <div className="reset-filters">
          <button>Clear filters</button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
