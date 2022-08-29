import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delete ,Add , Decremnt} from "../redux/action/action";

const Carts = () => {
  const [price,setPrice] = useState(0);
  console.log(price);

  const getData = useSelector((state) => state.cartreducer.carts);
  // const test = Object.assign({},getData, {qty:1});
  console.log(getData);
  // console.log(test);

  const dispatch  = useDispatch(); // like
      
  const incQnty = (item) => { 

  // dispatch method from redux
       dispatch( Add(item));
};

const decQnty = (item) => {
      dispatch( Decremnt(item));
}
  // dlt means delete / remove cart product function
  const dlt = (id) => {
    dispatch(Delete(id))
  }
        // for getting the total price of the items that are in cart
  const totalPrice = () =>{
    let price = 0;
    getData.map((el,i) =>{
       price = el.price + price;
    });
    return setPrice(price);
  }
 
  useEffect(()=> {
    totalPrice();

  },[price]);

  return (
    <div className="Carts">
      {getData.length ? (
        <>
        {
        getData.map((e) => (
          <div className="carts-detail" key={e.id} style={{ width: "60rem", position:"relative",top: 30,left:70,margin: 20}}>
            <table style={{border: "1px solid rgba(3,6,0,0.2)",
                boxShadow:"2px 0 2px"}}>
              <tbody>
                <tr style={{margin:10}}>
                  <td style={{padding:"10px"}}>
                    <img
                      src={e.image}
                      style={{ width: "5rem", height: "5rem",padding:30,border:"1px solid white",boxShadow:"1px 0 1px"}}
                    />
                  </td>
                  <td style={{margin:"20px",padding:"10px"}}>
                    <p><b>{e.title.substring(0, 11)}</b></p>
                    <p>Description: {e.description}</p>
                    <p>Price: ₹ {e.price}</p>
                    <div className="cart-qnty" style={{padding:20}}>
                      <button style={{padding:"6px",fontSize:20,borderRadius:"5px", background:'red',opacity:0.7}} onClick={()=> decQnty(e)}> -  </button>
                      { e.qnty }
                      <button style={{padding:"6px",fontSize:20,borderRadius:"5px", background:'green',opacity:0.7}} onClick={()=> incQnty(e)}> + </button>
                    </div>
                  </td>
                  <td style={{padding:"10px"}}>
                    <button onClick={()=>dlt(e.id)}>Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
            </div> 
        ))
        }
        <p className="cart total-price">
         Total Price: ₹ {price }
        </p>
        </> ) 
          : (
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