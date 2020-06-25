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

// TODO 1: Create CandidateList component.
// Use React.Fragment to render h2 and section components next to each other.
// Make sure to use className when setting the "year" class.

// TODO 2: Create RatingApp component to render Header and CandidateList components.
// Use React.Fragment to render children components next to each other.

const domContainer = document.getElementById("react-app");

// TODO 3: Replace Header by RatingApp component.
ReactDOM.render(<Header />, domContainer);
