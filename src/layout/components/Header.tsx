import Hamburger from "hamburger-react";
import { useState } from "react";
import "./header.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import type { RootState } from "@reduxjs/toolkit/query";

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigateToProducts = () => {
    navigate(`/products`);
  };

  const handleNavigateToHome = () => {
    navigate(`/`);
  };

  return (
    <>
      <div className="header-main">
        <div className="logo">
          <svg
            className="svg-img"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 9V6a4.5 4.5 0 00-9 0v3m-4.5 0h18l-1.5 11.25a2.25 2.25 0 01-2.25 2H6.75a2.25 2.25 0 01-2.25-2L3 9z"
            />
          </svg>
          <p>x-Shoppers-Dream</p>
        </div>

        <div className="links">
          <p onClick={handleNavigateToHome}>Home</p>

          <p onClick={handleNavigateToProducts}>Products</p>
        </div>

        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>

        <div className="cart" onClick={() => navigate("/cart")}>
          <p>Cart</p>
          <svg
            className="svg-img"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 9V6a4.5 4.5 0 00-9 0v3m-4.5 0h18l-1.5 11.25a2.25 2.25 0 01-2.25 2H6.75a2.25 2.25 0 01-2.25-2L3 9z"
            />
          </svg>
          <div className="number-cart">{totalItems}</div>
        </div>
      </div>

      {/* Mobilni meni koji se pojavljuje kad klikneš hamburger */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="item-hamburger">
          <a href="#">Home</a>
        </div>

        <div className="item-hamburger">
          <a href="#">Products</a>
        </div>

        <div className="mobile-cart item-hamburger"></div>
      </div>
    </>
  );
};

export default Header;
