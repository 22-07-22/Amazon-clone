import { React, useContext } from "react";
// importing css file
import "./Navbaar.css";
//importing materaial ui things

import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
// navlink has been used to connect the two js codes -> bit backend
import { LoginContext } from "../context/ContextProvider";

const Navbaar = () => {
  const { account, setAccount } = useContext(LoginContext);
  console.log(account);

  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            {/* image path */}
            <NavLink to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLeZEZAJmVh3wRYX-mlil2shFa1ZrF_DNcLj1Xj63C&s"
                alt=""
              />
            </NavLink>
          </div>
          <div className="nav_searchbaar">
            <input type="text" name="" id="" />
            {/* to get search icon we need material ui */}
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
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

            <p>Cart</p>
          </div>
          {account ? (
            <Avatar className="avtar2">{account.fname[0].toUpperCase()}</Avatar>
          ) : (
            <Avatar className="avtar"></Avatar>
          )}
        </div>
      </nav>
    </header>
  );
};


// qwerty
export default Navbaar;
