import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

import Header from "./Header/Header";
import HomePage from "./Hero-Section/page";
import FeaturedProduct from "./FeaturedProducts/featuredProducts";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <FeaturedProduct />
    </div>
  );
}

export default App;
