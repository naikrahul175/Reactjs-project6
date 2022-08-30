import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delete, Add, Decremnt } from "../redux/action/action";
import { DeleteFilled } from "@ant-design/icons";

const Carts = () => {
  const [price, setPrice] = useState(0);
  console.log(price);

  const getData = useSelector((state) => state.cartreducer.carts);
  // const test = Object.assign({},getData, {qty:1});
  console.log(getData);

  const dispatch = useDispatch(); // like

  const incQnty = (item) => {
    // dispatch method from redux
    dispatch(Add(item));
  };

  const decQnty = (item) => {
    dispatch(Decremnt(item));
  };
  // dlt means delete / remove cart product function
  const dlt = (id) => {
    dispatch(Delete(id));
  };
  // for getting the total price of the items that are in cart
  const totalPrice = () => {
  
    let price = 0;
    getData.map((el) => {
      price = el.price + price;
    });
    console.log(price);
    return setPrice(price);
  };

  useEffect(() => {
    totalPrice();
  //  console.log(calTotal);
  }, [price]);

  return (
    <div className="Carts">
      {getData.length ? (
        <div className="carts-detail">
          <>
            <table
              style={{
                width: "60rem",
                position: "relative",
                left: "10rem",
                top: "40px",
              }}
            >
              <tbody>
                {getData.map((e) => (
                  <tr
                    style={{
                      border: "1px solid rgba(3,6,0,0.2)",
                      boxShadow: "2px 0 2px",
                    }}
                  >
                    <td style={{ padding: "10px" }}>
                      <img
                        src={e.image}
                        style={{
                          width: "150px",
                          height: "130px",
                          padding: 30,
                          boxShadow: "1px 0 1px",
                        }}
                      />
                    </td>
                    <td style={{ margin: "20px", padding: "10px" }}>
                      <p>
                        <b>{e.title.substring(0, 11)}</b>
                      </p>
                      <p>Description: {e.description}</p>
                      <p>Price: ₹ {e.price}</p>
                      <div className="cart-qnty" style={{ padding: 20 }}>
                        <button
                          style={{
                            padding: "8px",
                            fontSize: 20,
                            borderRadius: "5px",
                            background: "red",
                            opacity: 0.7,
                          }}
                          onClick={() => decQnty(e)}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <span style={{ padding: 10 }}>{e.qnty}</span>
                        {/* { e.qnty * e.price} */}
                        <button
                          style={{
                            padding: "6px",
                            fontSize: 20,
                            borderRadius: "5px",
                            background: "green",
                            opacity: 0.7,
                          }}
                          onClick={() => incQnty(e)}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </td>
                    <td style={{ padding: "10px" }}>
                      <DeleteFilled
                        style={{ fontSize: 30, color: "red", marginRight: 20 }}
                        onClick={() => dlt(e.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
          <p
            className="cart total-price"
            style={{
              position: "relative",
              top: "50px",
              left: "50px",
              background: "forestgreen",
              width: "20rem",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
              alignItems: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Total Price: ₹ {price}
          </p>
        </div>
      ) : (
        <div
          className="carts-empty"
          style={{ padding: "250px", textAlign: "center" }}
        >
          <p style={{ fontSize: 20 }}>Empty cart</p>
        </div>
      )}
    </div>
  );
};

export default Carts;

//<div>
// Total: {price}
// </div>
