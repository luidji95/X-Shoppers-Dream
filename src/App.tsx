import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

import Header from "./layout/components/Header";
import HomePage from "./features/home/components/HeroSection";
import FeaturedProduct from "./features/products/components/featuredProducts";
import BrandEssence from "./features/home/components/BrandEssence";
import Operations from "./features/home/components/Operations";
import Testimonials from "./features/home/components/Testemonials";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <FeaturedProduct />
      <BrandEssence />
      <Operations />
      <Testimonials />
    </div>
  );
}

export default App;
