import React, { useState, useEffect } from "react";
import Cards from "./Cards";

export const Products = () => {
  const [Products, setProducts] = useState([]);

  // const [Cart, setCart] = useState(()=> {
  //   const localData = localStorage.getItem('Products');
  //   return localData ? JSON.parse(localData) : [];
  // });


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) console.log("Error in fetching the Data");

        return res.json();
      })
      .then((data) => {
        // for checking  the products data
        // console.log(data);  
        setProducts(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("Products", JSON.stringify(Cart)); // saves data in localStrage with setItem function
    
  //   console.log(Cart);
  // }, [Cart]);

  return (
    <div className="Products">
      {Products.map((product) => (
        <Cards key={product.id} product={product}  />
      ))}
    </div>
  );
};

// these is important , so just  remember this , we have used that before in Cards components for sending the props
//     setCart={setCart} Cart={Cart}