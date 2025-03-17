import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router";
import "./Header.css";

import { useState } from "react";

const Header = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
  };
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <FontAwesomeIcon
            className="logo"
            icon={faUtensils}
            spin
            size="2xl"
            style={{ color: "#74C0FC" }}
          />
        </Link>
      </div>
      <div className="nav-items-container">
        <ul className="nav-list">
          <NavLink to="/home" className="nav-button">
            Home
          </NavLink>
          <NavLink to="/contact" className="nav-button">
            Contact Us
          </NavLink>
          <NavLink to="/about" className="nav-button">
            About Us
          </NavLink>
          <li className="nav-button">Cart</li>
          <button className="Login" onClick={handleLogin}>
            {login ? "Login" : "logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
