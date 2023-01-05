import React from "react";
import ReactDOM from "react-dom/client";

const header = <h1 key="hello">This is different thing!!</h1>;
const container = React.createElement("div", { id: "container" }, [header]);
// console.log(header1);
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
root.render(container);
