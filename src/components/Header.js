import React from "react";
import Logo from "../images/gbh.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <h1> GBH Digital Library</h1>
    </header>
  );
};

export default Header;
