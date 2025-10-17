import Button from "../../../components/ui/Button";
import "./Products.css";
import type { Product } from "../types";

type ProductProps = {
  product: Product;
  variant?: "featured" | "list";
  onClick?: () => void;
};

export const capitalizeWords = (str: string) =>
  str
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const Product = ({ product, variant = "featured", onClick }: ProductProps) => {
  const { image, name, price, description } = product;

  return (
    <div
      className={`product-main-card ${variant}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick?.();
      }}
      aria-label={`Open details for ${name}`}
    >
      <img
        src={image}
        alt={name ? `${name} product image` : "Product image"}
        loading="lazy"
      />

      <div className="product-name-price">
        <div className="product-name">
          <h3>{capitalizeWords(name)}</h3>
        </div>
        <div className="product-price">
          <h3 className="price">
            $
            {Number(price).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h3>
        </div>
      </div>

      <div className="mobile-only">
        {description && <p className="p-details">{description}</p>}
        <Button
          variant="primary"
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          aria-label={`See details for ${name}`}
        >
          Details
        </Button>
      </div>
    </div>
  );
};

export default Product;
