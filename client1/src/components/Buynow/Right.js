import {React,useState,useEffect, useContext} from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {LoginContext} from "../context/ContextProvider";


const Right = ({iteam}) => {

  const {account,setAccount} = useContext(LoginContext);

  const [price,setPrice] = useState(0);

  useEffect(()=>{
    totalAmount();
  },[iteam])


  // const history = useHistory("");

  const totalAmount =()=>{
    let price = 0;
    iteam.map((item)=>{
      price += item.price.cost
    });
    setPrice(price)
  }

  const proceesby = async ()=>{
    // alert("Your Order is Confirmed");
    // history.push("/");


    const res = await fetch("/cartdetails", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data1 = await res.json();
    
    setAccount(data1);
    

    toast.success("Your Order is Confirmed",{
      position: "top-center",
    })

}

  return (
    <div className="right_buy">
      <img
        src="https://cdn.sanity.io/images/ec9j7ju7/production/e37a8417f49e6b2f502c37266611f3f40a01650d-91x66.svg?auto=format&w=640"
        alt="rightimg"
      />
      <div className="cost_right">
        <p>
          Your order is eligible for FREE Delivery. <br />
          <span style={{ color: "#565959" }}>
            {" "}
            Select this option at checkout. Details
          </span>
        </p>
        <h3>Subtotal ({iteam.length} items): <strong style={{fontWeight:700,color:"#111"}}>₹{price}.00</strong></h3> 
        <NavLink to = "/"><button className="rightbuy_btn" onClick={proceesby}>Proceed to Buy</button> </NavLink>
        {/* <button className="rightbuy_btn" onClick={proceesby}>Proceed to Buy</button>  */}

        <div className="emi">
          Thank You :)
        </div>
      </div>
    </div>
  );
};

export default Right;
