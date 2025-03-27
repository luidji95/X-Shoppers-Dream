import type { Product } from "../types";
import { useState } from "react";

type ProductProps = {
  product: Product;
};

const Product = ({ product }: ProductProps) => {
  const { image, name, price, description } = product;
  return (
    <div className="product-main-card">
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
        <p className="p-details">{description}</p>
      </div>
      <div className="details">
        <button className="allproducts-button">Details</button>
      </div>
    </div>
  );
};

export default Product;
