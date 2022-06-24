import React from "react";
import { ReactQueryDevtools } from 'react-query/devtools'
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider} from 'react-query';
import AllProducts from "./routes/AllProducts";
import Cart from "./routes/Cart";
import Product from "./routes/Product";
import NotFound from "./routes/NotFound"
import Filter from "./components/Filter";
import Categories from './components/Categories';
import Navbar from "./components/Navbar";

const queryClient = new QueryClient()
export default function App() {
  return (
  <QueryClientProvider client={queryClient}>
   <BrowserRouter>
   <div>
     <Navbar />
   </div>
   <Routes>
   <Route path="/products/" element={<AllProducts />} />
   <Route path="/cart/" element={<Cart />}/>
   <Route path="/products/:id" element={<Product />} />
   <Route path="/categories/:id" element={<Categories />}/>
   <Route  element={<NotFound />} />
   </Routes>
   </BrowserRouter>
   <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
  );
}
