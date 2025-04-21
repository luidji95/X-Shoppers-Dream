// import type { Product } from "../types";
import Button from "../../../components/ui/Button";
import "./Products.css";

type ProductProps = {
  product: Product;
  variant?: "featured" | "list";
};

const Product = ({ product, variant = "featured" }: ProductProps) => {
  const { image, name, price, description } = product;

  return (
    <div className={`product-main-card ${variant}`}>
      <img src={image} alt={name} />

      <div className="product-name-price">
        <div className="product-name">
          <h3>{name}</h3>
        </div>
        <div className="product-price">
          <h3 className="price">${price.toLocaleString()}</h3>
        </div>
      </div>

      {/* MOBILE ONLY */}
      <div className="mobile-only">
        <p className="p-details">{description}</p>
        <Button variant="primary">Details</Button>
      </div>
    </div>
  );
};

export default Product;
