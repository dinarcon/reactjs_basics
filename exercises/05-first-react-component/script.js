// TODO 1: Implement the header tag as a React component. Use a function to create it.
// Important: The component name should start with an uppercase letter.
const element = (
  <header>
    <h1>JavaScript Frameworks</h1>
    <p className="subheading">
      Vote for <strong>your favorite</strong> one.
    </p>
  </header>
);
const domContainer = document.getElementById("react-app");

// TODO 2: Use the React component as the first parameter to ReactDOM.render
ReactDOM.render(element, domContainer);
