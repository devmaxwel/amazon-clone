import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";

const Header = () => {

   const [{basket}] = useStateValue();


  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLine1">Hello Guest</span>
          <span className="header__optionLine2">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">Returns</span>
          <span className="header__optionLine2">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">Your</span>
          <span className="header__optionLine2">Prime</span>
        </div>

        <div className="header__optionBasket">
          <Link to="/checkout" style={{ color: "#fff",
          textDecoration:"none" }}>
            <ShoppingBasketIcon />
            <span className="header_optionLine2 header__basketCount">{basket.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
