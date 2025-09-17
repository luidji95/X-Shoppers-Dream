import Button from "../../../components/ui/Button";
import "./Products.css";
import type { Product } from "../types";

type ProductProps = {
  product: Product;
  variant?: "featured" | "list";
  onClick?: () => void;
};

export const capitalizeWords = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Product = ({ product, variant = "featured", onClick }: ProductProps) => {
  const { image, name, price, description } = product;

  return (
    <div className={`product-main-card ${variant}`} onClick={onClick}>
      <img src={image} alt={name} />

      <div className="product-name-price">
        <div className="product-name">
          <h3>{capitalizeWords(name)}</h3>
        </div>
        <div className="product-price">
          <h3 className="price">${price.toLocaleString()}</h3>
        </div>
      </div>

      <div className="mobile-only">
        <p className="p-details">{description}</p>
        <Button variant="primary">Details</Button>
      </div>
    </div>
  );
};

export default Product;
