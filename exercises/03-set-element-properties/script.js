// TODO 1: Update React element rendering the p tag to use the "subheading" class.
const element = React.createElement(
  "p",
  null,
  "Vote for ",
  React.createElement("strong", null, "your favorite"),
  " one."
);
const domContainer = document.getElementById("react-app");
ReactDOM.render(element, domContainer);
