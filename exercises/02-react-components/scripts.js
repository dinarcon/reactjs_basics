// TODO 1. Replace nested calls by JSX.
const element = React.createElement(
  "p",
  { className: "subheading" },
  "The best ",
  React.createElement("strong", null, "drive-in theather"),
  " around the block."
);

// TODO 2. Convert previous element to a custom React component.
// Use a functional component.

// TODO 3. Copy over and edit the markup to be rendered by React.
// Make sure to convert `class` attributes to `className`.

// TODO 4. Create a simple Movie component.
// It is ok for this component not to be dynamic so the same movie is rendered
// multiple times.

const renderTarget = document.getElementById("app");
ReactDOM.render(element, renderTarget);
