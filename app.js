import React from "react";
import ReactDOM from "react-dom/client";

const header1 = React.createElement(
  "h1",
  { className: "60px" },
  "This is h1 in REACT!!!"
);
const header2 = React.createElement("h2", {}, "This is h2 in REACT!!!");
const header3 = React.createElement("h3", {}, "This is h3 in REACT!!!");
const container = React.createElement("div", { id: "container" }, [
  header1,
  header2,
  header3,
]);
// console.log(header1);
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
root.render(container);
