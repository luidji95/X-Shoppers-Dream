// ✅ ProductDetails.tsx
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.id === id)
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-details-main">
      <h1>{product.name}</h1>
      <p>Price: ${(product.price / 100).toFixed(2)}</p>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
