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

// TODO 2: Add a "props" parameter to the function signature. Its value will be an object with all properties specified when the component is declared.
// In this example, the "name", "year", and "img_url" properties will exist in the "props" object.

// TODO 3: Replace the static content by the received properties values.
// Pay close attention to JavaScript interpolation inside JSX.
function Candidate() {
  return (
    <article>
      <h3>React</h3>
      <div className="year">Released in 2013</div>
      <img alt="React logo" src="../../images/react.png" />
    </article>
  );
}

// TODO 1: Pass properties to Candidate components. This is done using a syntax similar to HTML tag attributes.
// The properties to pass will be "name", "year", and "img_url". The values will correspond to the information for each framework.
// Update the three Candidate components with the corresponding properties and values.

// TODO 4: Remove the static article components for Vue and Angular.
function CandidateList() {
  return (
    <React.Fragment>
      <h2>Candidates</h2>
      <section>
        <Candidate />
        <Candidate />
        <Candidate />
        <article>
          <h3>Vue</h3>
          <div className="year">Released in 2014</div>
          <img alt="Vue logo" src="../../images/vue.png" />
        </article>
        <article>
          <h3>Angular</h3>
          <div className="year">Released in 2010</div>
          <img alt="Angular logo" src="../../images/angular.png" />
        </article>
      </section>
    </React.Fragment>
  );
}

function RatingApp() {
  return (
    <React.Fragment>
      <Header />
      <CandidateList />
    </React.Fragment>
  );
}

const domContainer = document.getElementById("react-app");

ReactDOM.render(<RatingApp />, domContainer);
