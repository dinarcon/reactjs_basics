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

// TODO 1: Add prop types to Candidate component.
function Candidate({ name, year, img_url }) {
  return (
    <article>
      <h3>{name}</h3>
      <div className="year">Released in {year}</div>
      <img alt={`${name} logo`} src={img_url} />
    </article>
  );
}

function CandidateList() {
  return (
    <React.Fragment>
      <h2>Candidates</h2>
      <section>
        {fetchData().map(({ id, name, year, logo }) => {
          return <Candidate key={id} name={name} year={year} img_url={logo} />;
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
