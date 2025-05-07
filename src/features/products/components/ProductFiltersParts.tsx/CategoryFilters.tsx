type CategoryFilterProps = {
  selectedCategory: string;
  categories: string[];
  updateFilters: (name: string, value: string) => void;
};

const CategoryFilter = ({
  selectedCategory,
  categories,
  updateFilters,
}: CategoryFilterProps) => {
  return (
    <div className="filter-category">
      <p className="filter-title">Category</p>
      <div className="category-items">
        {categories.map((cat) => (
          <span
            key={cat}
            onClick={() => updateFilters("category", cat)}
            className={selectedCategory === cat ? "active" : ""}
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
