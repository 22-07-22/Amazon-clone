import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signup.css"


const SignUp = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  console.log(udata);
  // adding data at required positions
  const adddata = (e) => {
    const { name, value } = e.target;
    setUdata((pre) => {
      return {
        ...pre,
        [name]: value,
      }
    })
  };

  const senddata = async(e)=>{
    e.preventDefault();
    const {fname,email,mobile,password,cpassword} = udata;

    // if(fname === ""){
    //   toast.warn("Provide fname",{
    //     position: "top-center",
    //   })
    //   }else if(email === ""){
    //     toast.warn("Provide email",{
    //       position: "top-center",
    //     })
    //   }

    const res = await fetch("register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        fname,email,mobile,password,cpassword
      })
    });

    const data = await res.json();
    // console.log(data);

    if(res.status === 422 || !data){
      // alert("no data")
      toast.warn("Invalid Details",{
        position: "top-center",
      })
    }else{
      // alert("data successfully added");
      toast.success("Data Successfully Added",{
        position: "top-center",
      })
      setUdata({...udata,fname:"",email:"",mobile:"",password:"",cpassword:""});
    }
  }

  return (
    <section>
      <div className="sign_container">
        {/* logo */}
        <div className="sign_header">
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLeZEZAJmVh3wRYX-mlil2shFa1ZrF_DNcLj1Xj63C&s" alt="signupimg" /> */}
          <img src="./blacklogoamazon.png" alt="signupimg" />
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Sign-Up</h1>
            <div className="form_data">
              <label htmlFor="fname">Your name</label>
              <input
                type="text"
                onChange={adddata}
                value={udata.fname}
                name="fname"
                id="fname"
              />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                onChange={adddata}
                value={udata.email}
                name="email"
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="number">Mobile</label>
              <input
                type="text"
                onChange={adddata}
                value={udata.mobile}
                name="mobile"
                id="mobile"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={adddata}
                value={udata.password}
                name="password"
                placeholder="At least 6 char"
                id="password"
              />
            </div>
            <div className="form_data">
              <label htmlFor="cpassword">Password Again</label>
              <input
                type="cpassword"
                onChange={adddata}
                value={udata.cpassword}
                name="cpassword"
                id="password"
              />
            </div>
            <button className="signin_btn" onClick={senddata}>Continue</button>

            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/login">SignIn</NavLink>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default SignUp;
