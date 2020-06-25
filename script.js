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

function Candidate(props) {
  return (
    <article>
      <h3>{props.name}</h3>
      <div className="year">Released in {props.year}</div>
      <img alt={`${props.name} logo`} src={props.img_url} />
    </article>
  );
}

function CandidateList() {
  return (
    <React.Fragment>
      <h2>Candidates</h2>
      <section>
        <Candidate name="React" year="2013" img_url="./images/react.png" />
        <Candidate name="Vue" year="2014" img_url="./images/vue.png" />
        <Candidate name="Angular" year="2010" img_url="./images/angular.png" />
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
