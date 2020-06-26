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

// TODO 1: Remove implementation of useState. The voteCount state will be lifted to the CandidateList component.
// TODO 2: Remove the handleClick function declaration. It will no longer be needed because the voteCount state will not be managed in this component any longer.
// TODO 3: Use the "votes" property that is passed to print the number of votes a candidate has.

// TODO 8: Add "id" and "handleClick" to the list of descructured properties.
// TODO 9: Use the passed "id" property for setting an id to the button.
// TODO 10: Use the passed "handleClick" property as the click handler for the button.
function Candidate({ name, year, votes, img_url }) {
  const [voteCount, setVoteCount] = React.useState(votes || 0);
  const handleClick = (event) => {
    setVoteCount(voteCount + 1);
  };

  return (
    <article>
      <h3>{name}</h3>
      <div className="year">Released in {year}</div>
      <div>{voteCount} votes</div>
      <button onClick={handleClick}>+1 vote</button>
      <img alt={`${name} logo`} src={img_url} />
    </article>
  );
}

// TODO 7: Add prop types for the "id" and "handleClick" properties.
Candidate.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
  img_url: PropTypes.string.isRequired,
};

function CandidateList() {
  const [candidatesData, setCandidatesData] = React.useState([]);

  React.useEffect(() => {
    const fetchedCandidates = fetchData();
    setCandidatesData(sortByVotes(fetchedCandidates));

    // useEffect can optionally return a clean up function.
    // It is executed before the effect is run again and when the component unmounts.
    // It can be used to clear a timer, unsubscribe from a service, etc.
    // This empty function is just a placeholder for reference.
    return function cleanup() {};

    // The second argument to useEffect is an array of variables.
    // If any of the variables changes between renders, the effect is run again.
    // An empty array means that the effect should be executed only once when the component mounts.
    // Not providing a value for this argument makes the effect run on every render of the component.
    // Generally, this array includes the variables used within useEffect. Lint rules exist to check this.
  }, []);

  const sortByVotes = (data) => {
    return data.sort((a, b) => b.votes - a.votes);
  };
  // This function is used to handle the candidatesData state.
  const handleClick = (event) => {
    // This is the id property of the button in the Candidate components.
    const clickedButtonId = event.target.id;

    // This is done to prevent mutating the original data.
    // Using immutable data helps avoid hard to debug problems.
    const newCandidatesData = candidatesData.map((candidate) => {
      if (candidate.id === clickedButtonId) {
        return Object.assign({}, candidate, { votes: candidate.votes + 1 });
      } else {
        return candidate;
      }
    });

    setCandidatesData(sortByVotes(newCandidatesData));
  };

  // TODO 4: Pass an "id" property to the Candidate component. This will be used to identify which button in the list is clicked.
  // TODO 5: Pass the "handleClick" function as a property to the Candidate component.
  return (
    <React.Fragment>
      <h2>Candidates</h2>
      <section>
        {candidatesData.map(({ id, name, year, votes, logo }) => {
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
      logo: "../../images/angular.png",
    },
  ];
}
