import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="products/*" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
