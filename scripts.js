const vDOM = React.createElement(
  "p",
  { className: "subheading" },
  "El mejor ",
  React.createElement("strong", null, "cine al aire libre"),
  " de Managua."
);

const renderTarget = document.getElementById("app");
ReactDOM.render(vDOM, renderTarget);
