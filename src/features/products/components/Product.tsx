import "./Products.css";

type ProductProps = {
  product: Product;
  variant?: "featured" | "list";
};

const Product = ({ product, variant = "" }: ProductProps) => {
  const { image, name, price } = product;

  return (
    <div className={`product-main-card ${variant}`}>
      <img src={image} alt={name} />
      <div className="details-a-hidden">
        <a href="#" className="details-a">
          Detaljnije
        </a>
      </div>

      <div className="product-name-price">
        <div className="product-name">
          <h3>{name}</h3>
        </div>
        <div className="product-price">
          <h3 className="price">${price.toLocaleString()}</h3>
        </div>
      </div>

      <div className="details">
        <button className="allproducts-button">Details</button>
      </div>
    </div>
  );
};

export default Product;
