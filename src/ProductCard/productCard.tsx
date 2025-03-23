import type { Product } from "../type/products";

type ProductProps = {
  product: Product;
};

const Product = ({ product }: ProductProps) => {
  const { image, name, price } = product;
  return (
    <div className="product-main-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h3>{price}</h3>
    </div>
  );
};

export default Product;
