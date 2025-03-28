import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

import HomePage from "./features/home/pages/HomePage";
import ProductsPage from "./features/products/components/ProductsPage";
import SharedLayout from "./layout/components/SharedLayout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
