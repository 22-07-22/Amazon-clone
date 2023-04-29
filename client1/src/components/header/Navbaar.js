import { React, useContext, useEffect, useState } from "react";
// importing css file
import "./Navbaar.css";
//importing materaial ui things

import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Rightheader from "./Rightheader";
import { NavLink, useNavigate } from "react-router-dom";
// navlink has been used to connect the two js codes -> bit backend
import { LoginContext } from "../context/ContextProvider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { ToastContainer, toast } from 'react-toastify';
import {useSelector} from "react-redux";

const Navbaar = () => {
  const { account, setAccount } = useContext(LoginContext);
  // console.log(account);

  const histroy = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // search icon kaeliye
  const [text,setText] = useState("");
  console.log(text);
  const [liopen,setLiopen] = useState(true);

  const {products} = useSelector(state => state.getproductsdata);

  const [dropen, setDropen] = useState(false);

  // /validuser
  const getdetailvaliduser = async () => {
    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    // console.log(data);

    if (res.status !== 201) {
      console.log("first login");
    } else {
      console.log("/data valid");
      setAccount(data);
    }
  };

  const handleopen = () => {
    setDropen(true);
  };

  const handledrclose = () => {
    setDropen(false);
  };

  const logoutuser = async () => {
  const res2 = await fetch("/logout", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data2 = await res2.json();
  // console.log(data2);

  if (res2.status !== 201) {
    console.log("error");
  } else {
    console.log("data valid");
    // alert("Logout");
    toast.success("User Logout",{
      position: "top-center",
    })
    histroy("/");
    setAccount(false);
    
  }
};


  const getText=(iteams)=>{
    setText(iteams)
    setLiopen(false)
  }

  useEffect(() => {
    getdetailvaliduser();
  }, []);

  return (
    <header>
      <nav>
        <div className="left">
          {/* side icons / slider */}
          <IconButton className="hamburgur" onClick={handleopen}>
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>

          <Drawer open={dropen} onClose={handledrclose}>
            <Rightheader Logclose={handledrclose} Logoutuser = {logoutuser}/>
          </Drawer>

          <div className="navlogo">
            {/* image path */}
            <NavLink to="/">
              <img style = {{width:150 , height : 55}}
                src=".\final_logo_black_1.png"
                alt="logo"
              />
            </NavLink>
          </div>
          {/* search bar */}
          <div className="nav_searchbaar">
            <input type="text" name="" 
            onChange={(e)=>getText(e.target.value )}
            placeholder='Search Your Products'
            id="" />
            {/* to get search icon we need material ui */}
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>

            {/* search filter */}
            {
              text &&
              <List className="extrasearch" hidden={liopen}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                    <ListItem>
                      <NavLink to = {`/getproductsone/${product.id}`} onClick={()=>setLiopen(true)}>
                      {product.title.longTitle} 
                      </NavLink>
                      
                    </ListItem>
                  ))
                }
              </List>
            }
          </div>
        </div>
        {/* left part for logo and search bar
            right for cart and design in buttons and avtar(profile)
            */}
        <div className="right">
          <div className="nav_btn">
            <NavLink to="/login">signIn</NavLink>
            {/* page wont get reloaded but anchor tag(a) reloads */}
          </div>
          <div className="cart_btn">
            {/* cart icon is needed*/}
            {/* account.carts.length */}
            {/* <Badge badgeContent={4} color="primary"> */}
            {/* if user is logged in -> redirects to buynow page else login page */}
            {account ? (
              <NavLink to="/buynow">
                <Badge badgeContent={account.carts.length} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            )}
            
            <ToastContainer />

            <p>Cart</p>
          </div>
          {account ? (
            <Avatar className="avtar2"
                id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}>
              {account.fname[0].toUpperCase()}</Avatar>
          ) : (
            <Avatar className="avtar"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            ></Avatar>
          )}
          
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            
            <MenuItem onClick={handleClose}>My account</MenuItem>
            {
              account ? <MenuItem onClick ={logoutuser}><LogoutIcon style={{fontSize:16,marginRight:3}}/>Logout</MenuItem> :""
            }
            {/* account ? <MenuItem onClick={handleClose} style={{ margin: 10 }} onClick={logoutuser}><LogoutIcon style={{ fontSize: 16, marginRight: 3 }} />   Logout</MenuItem> : "" */}
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Navbaar;
