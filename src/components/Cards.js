import React, { useEffect, useState } from "react";

const Cards = (props) => {
  const { id, category, description, image, title } = props.Product; // destructuring the props

  // fuction to Add products in cart 
  const addProductToCart = () => {
    props.setCart([...props.Cart, props.Product]); //setCart state
  };

  return (
    <div className="card">
      <img
        src={image}
        alt="Products"
        style={{ maxWidth: "100%", height: "20%" }}
      />
      <div className="container">
        <h6>{title.substring(0, 11)}</h6>
        <button className="card-btn" onClick={()=>addProductToCart()}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
