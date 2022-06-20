import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom'
import Navbar from "./components/Navbar";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./routes/AllProducts";
import Cart from "./routes/Cart";
import Product from "./routes/Product";



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <Navbar />
    </div>
    <BrowserRouter>
    <Routes>
    
    <Route path="/allproducts" element={<AllProducts />} />
    <Route path="/cart" element={<Cart />}/>
    <Route path="/product" element={<Product />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
