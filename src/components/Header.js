import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { signOut } from "firebase/auth";
import { authentication } from "./config/firebaseConfig";


const Header = () => {
  const [{ basket, user }] = useStateValue();

  const handleLogOut = () => {
    signOut(authentication);
    window.location.reload();
  };

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
        {user ? (
          <div className="header__option">
            {user && (
              <span className="header__optionLine1">Hello {user.email}</span>
            )}
            <span className="header__optionLine2">
              <button
                style={{
                  background: "#f0c14b",
                  border: "1px solid",
                  borderRadius: "5px",
                  marginTop: " 10px",
                  height:"30px",
                  width:"90px",
                  cursor:"pointer"
                }}
                onClick={handleLogOut}
              >
                Sign Out
              </button>
            </span>
          </div>
        ) : (
          <Link to="/signin">
            <div className="header__option">
              <span className="header__optionLine1">
                Hello {user ? user.email : "Guest"}
              </span>

              <span className="header__optionLine2">Sign In</span>
            </div>
          </Link>
        )}
        <div className="header__option">
          <span className="header__optionLine1">Returns</span>
          <span className="header__optionLine2">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">Your</span>
          <span className="header__optionLine2">Prime</span>
        </div>

        <div className="header__optionBasket">
          <Link
            to="/checkout"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <ShoppingBasketIcon />
            <span className="header_optionLine2 header__basketCount">
              {basket.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
