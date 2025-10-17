import "./App.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import HomePage from "./features/home/pages/HomePage";
import ProductsPage from "./features/products/components/ProductsPage";
import SharedLayout from "./layout/components/SharedLayout";
import { Routes, Route } from "react-router-dom"; 
import ProductDetails from "./features/products/components/productDetails";
import Cart from "./features/cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
