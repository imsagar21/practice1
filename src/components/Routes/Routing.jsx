import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import NotFountPage from "./pages/NotFountPage";
import ProductDetails from "./pages/ProductDetails";

const Routing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Routing Concept</h1>
        <h3>Using Link</h3>
        <div style={{display:"flex", gap:"20px"}}>
          <Link to='/about'>About</Link>
          <Link to = '/products'>Products</Link>
        </div>
        <h3>Using UseNavigateHook</h3>
        <div style={{display:"flex", gap:"20px"}}>
          <button
            onClick={() => navigate("/about")}
            style={{
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
            }}
          >
            About
          </button>
          <button
            onClick={() => navigate("/products")}
            style={{
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
            }}
          >
            Products
          </button>
        </div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element = {<ProductDetails/>}/>
          <Route path="*" element={<NotFountPage/>} />
        </Routes>
      </div>
    </>
  );
};

export default Routing;
