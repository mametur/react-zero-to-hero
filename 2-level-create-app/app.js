import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./layout/Header";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import "./index.css";

const App = () => {
  return (
    <div className="layout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
