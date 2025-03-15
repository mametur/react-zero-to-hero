import { useState } from "react";

const Header = ({ logo, searchText, icon }) => {
  const [searchValue, setSearchText] = useState("");

  handleSearch = () => {
    alert(searchValue);
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder={searchText}
          value={searchValue}
          onChange={(e) => setSearchText(e.target.value)}
          aria-label="Search input"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="user-icon">
        <img src={icon} alt="user-icon" />
      </div>
    </div>
  );
};

export default Header;
