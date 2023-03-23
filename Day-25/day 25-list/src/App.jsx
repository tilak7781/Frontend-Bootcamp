import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PizzaToppings from "./PizzaToppings";
import MemoizedEx from "./MemoizedEx";
import Products from "./Products";

function App() {
  return (
    <div className="App">
      {/* <PizzaToppings /> */}
      {/* <MemoizedEx /> */}
      <Products />
    </div>
  );
}

export default App;
