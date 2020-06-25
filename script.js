function Header() {
  return (
    <header>
      <h1>JavaScript Frameworks</h1>
      <p className="subheading">
        Vote for <strong>your favorite</strong> one.
      </p>
    </header>
  );
}

const domContainer = document.getElementById("react-app");
ReactDOM.render(<Header />, domContainer);
