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

function CandidateList() {
  return (
    <React.Fragment>
      <h2>Candidates</h2>
      <section>
        <article>
          <h3>React</h3>
          <div className="year">Released in 2013</div>
          <img alt="React logo" src="./images/react.png" />
        </article>
        <article>
          <h3>Vue</h3>
          <div className="year">Released in 2014</div>
          <img alt="Vue logo" src="./images/vue.png" />
        </article>
        <article>
          <h3>Angular</h3>
          <div className="year">Released in 2010</div>
          <img alt="Angular logo" src="./images/angular.png" />
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
