import React, { useState, useEffect } from "react";
import Cards from "./Cards";

export const Products = () => {
  const [Products, setProducts] = useState([]);
  const [Cart, setCart] = useState(()=> {
    const localData = localStorage.getItem('Products');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) console.log("Error in fetching the Data");

        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("Products", JSON.stringify(Cart)); // saves data in localStrage with setItem function
    
    console.log(Cart);
  }, [Cart]);

  return (
    <div className="Products">
      {Products.map((product) => (
        <Cards key={product.id} Product={product} setCart={setCart} Cart={Cart} />
      ))}
    </div>
  );
};
