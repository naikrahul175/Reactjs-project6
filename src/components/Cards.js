import React from "react";
import { useDispatch } from "react-redux";
import { Add } from "../redux/action/action";

const Cards = (props) => {
  const { id, category, description, image, title } = props.product; // destructuring the props

  const dispatch = useDispatch(); // like useContext we have used useDisptch() 

  // fuction to Add products in cart using Redux
  const addProductToCart = (item) => {
      //  props.setCart([...props.Cart, props.Product]); //setCart state

    // dispatch method from redux
         dispatch( Add(item));
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
        <button className="card-btn" onClick={()=>{
          // const addProduct = Object.assign({},props.product, {qnty:0});
          // console.log(props.product);
          // console.log(test);
          // addProductToCart(addProduct)
         addProductToCart(props.product) }}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
