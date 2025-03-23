const Product = ({ image, price, name }) => {
  return (
    <div className="product-main-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h3>{price}</h3>
    </div>
  );
};

export default Product;
