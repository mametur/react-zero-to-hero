import React from "react";
import ReactDOM from "react-dom/client";

// React element
const jsxHeader = <h1>Hello wordl </h1>;

// React Component
const myName = "Azad";

const Title = () => {
  return (
    <div>
      <h1>This is title</h1>
      {myName}
    </div>
  );
};

const HeadingComponent = () => {
  return (
    <div>
      {/** You can call component in many ways */}
      <Title />
      <Title></Title>
      {Title()}
      <h1>This is heading component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
