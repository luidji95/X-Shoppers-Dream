import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleProductDetails } from "../api/productsServices";
import type { Product } from "../types";
import Button from "../../../components/ui/Button";
import "./productDetails.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";
import { capitalizeWords } from "./Product";
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState<string | undefined>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

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

  useEffect(() => {
    if (product && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
      setMainImage(product.images[0].url);
    }
  }, [product]);

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

  const handleAddToCart = () => {
    if (stock > 0) {
      console.log("Adding to cart:", product.name, quantity, selectedColor);
      dispatch(
        addToCart({
          product: { ...product, image: mainImage },
          quantity,
          selectedColor,
        })
      );
    }
  };

  return (
    <div className="product-details-section">
      <Button onClick={() => navigate(-1)} className="back-btn">
        ← Back to Products
      </Button>

      <div className="product-details-grid">
        <div className="product-images">
          <img
            className="main-image"
            src={mainImage}
            alt={name}
            style={{ width: "500px", height: "500px", objectFit: "cover" }}
          />
          <div className="thumbnail-row">
            {images.map((img) => (
              <img
                key={img.id}
                src={img.url}
                alt={name}
                className={`thumbnail ${mainImage === img.url ? "active" : ""}`}
                onClick={() => setMainImage(img.url)}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1>{capitalizeWords(name)}</h1>
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
                onClick={() => setSelectedColor(c)}
                style={{
                  backgroundColor: c,
                  display: "inline-block",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  margin: "0 5px",
                  border:
                    selectedColor === c ? "2px solid black" : "1px solid #ccc",
                  cursor: "pointer",
                }}
                title={c}
              ></span>
            ))}
          </div>

          <div className="add-to-cart">
            <div className="quantity-controls">
              <button
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>

            <Button
              variant="primary"
              onClick={handleAddToCart}
              disabled={stock === 0}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
