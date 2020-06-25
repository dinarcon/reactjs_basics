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

// TODO 2: Destructure the "props" object in the function signature and update the variable replacements.
function Candidate(props) {
  return (
    <article>
      <h3>{props.name}</h3>
      <div className="year">Released in {props.year}</div>
      <img alt={`${props.name} logo`} src={props.img_url} />
    </article>
  );
}

// TODO 1: Use return value of the fetchData function to dynamically create Candidate components.
// Array.map() can be used to create them. Pay close attention to JavaScript interpolation inside JSX.
// Important: Add a "key" property to every Candidate component. The value must be unique for each one.
function CandidateList() {
  return (
    <React.Fragment>
      <h2>Candidates</h2>
      <section>
        <Candidate name="React" year="2013" img_url="../../images/react.png" />
        <Candidate name="Vue" year="2014" img_url="../../images/vue.png" />
        <Candidate name="Angular" year="2010" img_url="../../images/angular.png" />
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

// This could be replaced by an API call. In that case, the application needs to be updated to handle asynchronous code and potential errors.
// The function declaration is hoisted. That is why we can call it even though the function implementation appears later in the file.
// We keep this function here to focus on the React code above.
function fetchData() {
  return [
    {
      id: "framework-1",
      name: "React",
      year: 2013,
      logo: "../../images/react.png",
    },
    {
      id: "framework-2",
      name: "Vue",
      year: 2014,
      logo: "../../images/vue.png",
    },
    {
      id: "framework-3",
      name: "Angular",
      year: 2010,
      logo: "../../images/angular.png",
    },
  ];
}
