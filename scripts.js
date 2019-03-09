const vDOM = React.createElement(
  "p",
  null,
  "El mejor ",
  React.createElement("strong", null, "cine al aire libre"),
  " de Managua."
);

const renderTarget = document.getElementById("app");
ReactDOM.render(vDOM, renderTarget);
