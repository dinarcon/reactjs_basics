// TODO 1: Use JSX to created nested React elements.
const element = React.createElement(
  "p",
  { className: "subheading" },
  "Vote for ",
  React.createElement("strong", null, "your favorite"),
  " one."
);
const domContainer = document.getElementById("react-app");
ReactDOM.render(element, domContainer);
