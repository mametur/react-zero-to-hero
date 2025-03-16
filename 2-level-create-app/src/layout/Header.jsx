import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
  };
  return (
    <div className="header">
      <div className="logo-container">
        <FontAwesomeIcon
          className="logo"
          icon={faUtensils}
          spin
          size="2xl"
          style={{ color: "#74C0FC" }}
        />
      </div>
      <div className="nav-items-container">
        <ul className="nav-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="Login" onClick={handleLogin}>
            {login ? "Login" : "logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
