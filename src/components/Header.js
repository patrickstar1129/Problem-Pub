import React from "react";
import "./Header.css";
import {Link } from 'react-router-dom'

function Header({ setOpen }) {
  return (
    <div className="header_container">
      <div className="header_logo"><Link className="home_link"to="/">Problem Pub</Link></div>
      <div className="header_add" onClick={() => setOpen(true)}>
        Add A Problem
      </div>
    </div>
  );
}

export default Header;
