import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./signup.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// routing has to be created for sign up and signin pages

const Sign_in = () => {
  const [logdata, setData] = useState({
    email: "",
    password: "",
  });
  console.log(logdata);

  const adddata = (e) => {
    const { name, value } = e.target;

    setData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };

  const senddata = async (e) => {
    e.preventDefault();

    const { email, password } = logdata;
try {
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      })
    });

  const data = await res.json();
  // console.log(data);

  if(res.status === 400 || !data){
    console.log("invalid details");
    toast.warn("Invalid Details",{
      position: "top-center",
    })
  }else{
    console.log("data valid");
    toast.success("User Valid",{
      position: "top-center",
    })
    setData({...logdata,email:"",password:""});
  }
} catch(error){
  console.log("login page ka error" + error.message);
}

  };

  return (
    <>
      <section>
        <div className="sign_container">
          {/* logo */}
          <div className="sign_header">
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLeZEZAJmVh3wRYX-mlil2shFa1ZrF_DNcLj1Xj63C&s" alt="signupimg" /> */}
            <img src="./blacklogoamazon.png" alt="signupimg" />
          </div>
          <div className="sign_form">
            <form method="POST">
              <h1>Sign-In</h1>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  onChange={adddata}
                  value={logdata.email}
                  name="email"
                  id="email"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={adddata}
                  value={logdata.password}
                  name="password"
                  placeholder="At least 6 char"
                  id="password"
                />
              </div>
              <button className="signin_btn" onClick={senddata}>
                Continue
              </button>
            </form>
          </div>
          {/* for options below signin  */}
          <div className="create_accountinfo">
            <p>New To Amazon</p>
            <NavLink to="/register">
              <button>Create Your Amazon Account</button>{" "}
            </NavLink>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Sign_in;
