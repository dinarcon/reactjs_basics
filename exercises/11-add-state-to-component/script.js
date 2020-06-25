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

// TODO 1: Leverage the useState hook to add state to Candidate component.
// The added state will keep track of the number of votes towards each candidate.
// Provide a fallback of zero in case no "votes" property is received.
// Use a variable named "voteCount" to store the votes state value.
// Use a function named "setVoteCount" to update the votes state value.
// Implement the handleClick function to increase the votes state value by one when the button is clicked.
function Candidate({ name, year, votes, img_url }) {
  const voteCount = votes;
  const setVoteCount = () => {};
  const handleClick = (event) => {
    return;
  };

  return (
    <article>
      <h3>{name}</h3>
      <div className="year">Released in {year}</div>
      <div>{voteCount} votes</div>
      <button>+1 vote</button>
      <img alt={`${name} logo`} src={img_url} />
    </article>
  );
}

// A new prop type is added for the "votes" property.
Candidate.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
  img_url: PropTypes.string.isRequired,
};

// The "votes" property is passed to Candidate components.
function CandidateList() {
  return (
    <React.Fragment>
      <h2>Candidates</h2>
      <section>
        {fetchData().map(({ id, name, year, votes, logo }) => {
          return (
            <Candidate
              key={id}
              name={name}
              year={year}
              votes={votes}
              img_url={logo}
            />
          );
        })}
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

// A new "votes" property is added to each object representing a framework.
function fetchData() {
  return [
    {
      id: "framework-1",
      name: "React",
      year: 2013,
      votes: 7,
      logo: "../../images/react.png",
    },
    {
      id: "framework-2",
      name: "Vue",
      year: 2014,
      votes: 3,
      logo: "../../images/vue.png",
    },
    {
      id: "framework-3",
      name: "Angular",
      year: 2010,
      votes: 5,
      logo: "../..images/angular.png",
    },
  ];
}
