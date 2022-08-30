import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Carts from "./components/Carts";
import { Products } from "./components/Products";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Products />} />
          <Route path="/carts" element={<Carts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
