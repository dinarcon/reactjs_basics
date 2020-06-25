// TODO 1: Create a nested React element so that "your favorite" is rendered inside a strong tag.
const element = React.createElement(
  "p",
  null,
  "Vote for ",
  "your favorite",
  " one."
);
const domContainer = document.getElementById("react-app");
ReactDOM.render(element, domContainer);
