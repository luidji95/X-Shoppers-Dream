type ColorFilterProps = {
  selectedColor: string;
  colors: string[];
  updateFilters: (name: string, value: string) => void;
};

const ColorFilter = ({
  selectedColor,
  colors,
  updateFilters,
}: ColorFilterProps) => {
  return (
    <div className="filter-color">
      <p className="filter-title">Color</p>
      <div className="color-options">
        {colors.map((c) => (
          <span
            key={c}
            onClick={() => updateFilters("color", c)}
            className={`color-circle ${selectedColor === c ? "active" : ""}`}
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
  );
};

export default ColorFilter;
