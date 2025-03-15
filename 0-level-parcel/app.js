import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Hello World Azad"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h1", {}, "I am an h1 tag"),
  ])
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
