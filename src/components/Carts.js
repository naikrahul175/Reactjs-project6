import React from "react";
import { useSelector } from "react-redux";

const Carts = () => {
  const getData = useSelector((state) => state.cartreducer.carts);
  console.log(getData);

  return (
    <div className="Carts">
      {getData.length > 0 ? (
        getData.map((e) => (
          <div className="card-details" key={e.id} style={{ width: "50rem", padding: 20 }}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={e.image}
                      style={{ width: "5rem", height: "5rem" }}
                    />
                  </td>
                  <td>
                    <p>{e.title.substring(0, 11)}</p>
                    <p>Price: ₹{e.price}</p>
                    <p>Description: {e.description}</p>
                    <p><button>-</button>qty<button>+</button></p>
                  </td>
                  <td>
                    <button >Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
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
