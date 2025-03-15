import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
const logo =
  "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000";
const searchText = "Search";
const icon =
  "https://img.icons8.com/?size=100&id=98957&format=png&color=000000";

const App = () => {
  return (
    <div>
      <Header logo={logo} searchText={searchText} icon={icon} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
