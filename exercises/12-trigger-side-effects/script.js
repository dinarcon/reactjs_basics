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

Candidate.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
  img_url: PropTypes.string.isRequired,
};

function CandidateList() {
  const [candidatesData, setCandidatesData] = React.useState([]);

  // TODO 1: Leverage the useEffect hook to trigger a side effect.
  // Use the fetchData function to load the candidates data from inside the hook.
  // Sort the results with the sortByVotes function.
  // Set the candidatesData state to the sorted results.
  // Make sure the data is fetched only once instead of on every render.

  const sortByVotes = (data) => {
    return data.sort((a, b) => b.votes - a.votes);
  };

  // TODO 2: Replace the call to fetchData in the return value below.
  // Use the candidatesData state instead.
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
