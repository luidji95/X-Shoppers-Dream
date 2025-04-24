import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleProductDetails } from "../api/productsServices";
import type { Product } from "../types";
import Button from "../../../components/ui/Button";
import "./productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery<Product>({
    queryKey: ["single-product", id],
    queryFn: () => fetchSingleProductDetails(id!),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading product details...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;
  if (!product) return <p>Product not found</p>;

  const {
    name,
    price,
    description,
    company,
    stock,
    colors,
    images,
    stars,
    reviews,
    id: sku,
  } = product;

  return (
    <div className="product-details-section">
      <Button onClick={() => navigate(-1)} className="back-btn">
        ← Back to Products
      </Button>

      <div className="product-details-grid">
        {/* Left: Images */}
        <div className="product-images">
          <img className="main-image" src={images[0]?.url} alt={name} />
          <div className="thumbnail-row">
            {images.map((img) => (
              <img
                key={img.id}
                src={img.url}
                alt={name}
                className="thumbnail"
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="product-info">
          <h1>{name}</h1>
          <p className="stars">
            {"★".repeat(Math.round(stars))} ({reviews} customer reviews)
          </p>
          <h2 className="price">${(price / 100).toFixed(2)}</h2>
          <p className="description">{description}</p>

          <p>
            <strong>Available:</strong>{" "}
            {stock > 0 ? "In stock" : "Out of stock"}
          </p>
          <p>
            <strong>SKU:</strong> {sku}
          </p>
          <p>
            <strong>Brand:</strong> {company}
          </p>

          <div className="color-options">
            <strong>Colors:</strong>
            {colors.map((c) => (
              <span
                key={c}
                style={{
                  backgroundColor: c,
                  display: "inline-block",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  margin: "0 5px",
                  border: "1px solid #ccc",
                }}
              ></span>
            ))}
          </div>

          <div className="add-to-cart">
            <div className="quantity-controls">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <Button variant="primary">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
