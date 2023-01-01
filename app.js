const header1 = React.createElement(
  "h1",
  { className: "60px" },
  "This is h1 in REACT!!!"
);
const header2 = React.createElement("h2", {}, "This is h2 in REACT!!!");
const header3 = React.createElement("h3", {}, "This is h3 in REACT!!!");
console.log(header1);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(header3);
root.render(header2);
root.render(header1);
