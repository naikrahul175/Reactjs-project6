import React from "react";
import { useDispatch } from "react-redux";
import { Add } from "../redux/action/action";
import { Card, Button } from "antd";
const { Meta } = Card;

const Cards = (props) => {
  const { id, category, description, image, title, price } = props.product; // destructuring the props

  const dispatch = useDispatch(); // like useContext we have used useDisptch()

  // fuction to Add products in cart using Redux
  const addProductToCart = (item) => {
    //  props.setCart([...props.Cart, props.Product]); //setCart state

    // dispatch method from redux
    dispatch(Add(item));
  };

  return (
    <Card
      hoverable
      style={{ width: 240, margin: 20 }}
      cover={<img alt="Products" src={image} style={{ height: 218 }} />}
    >
      {/* <img
        src={image}
        alt="Products"
        style={{width:"100px",height:"150px"}}
      /> */}
      {/* <div className="container">
        <h6>{title.substring(0, 11)}</h6>
        <button className="card-btn" onClick={()=>{
          // const addProduct = Object.assign({},props.product, {qnty:0});
          // console.log(props.product);
          // console.log(test);
          // addProductToCart(addProduct)
         addProductToCart(props.product) }}>
          Add To Cart
        </button> */}
      <span>
        <strong>{title.substring(0, 11)}</strong>
      </span>{" "}
      <br />
      <span>Price: ₹ {price}</span>
      <br />
      <Button
        style={{
          position: "relative",
          top: 10,
          left: 30,
          background: "green",
          color: "white",
        }}
        className="card-btn"
        onClick={() => {
          addProductToCart(props.product);
        }}
      >
        Add To Cart
      </Button>
      {/* </div> */}
    </Card>
  );
};

export default Cards;
