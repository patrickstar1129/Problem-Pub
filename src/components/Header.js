import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo .svg";

function Header({ setOpen }) {
  return (
    <div className="header_container">
      <div className="header_logo">
        <Link className="home_link" to="/">
          <img src={logo}></img>
        </Link>
      </div>

      <div className="header_add" onClick={() => setOpen(true)}>
        Add A Problem
      </div>
    </div>
  );
}

export default Header;
