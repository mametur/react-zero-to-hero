import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
