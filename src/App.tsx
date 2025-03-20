import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./Navigacija/navigation";
import HomePage from "./Hero-Sekcija/page";

function App() {
  return (
    <div>
      <Navigation />
      <HomePage />
    </div>
  );
}

export default App;
