const seed = [
  {
    id: "tt0117705",
    name: "Space Jam",
    year: 1996,
    votes: 5,
    cover:
      "https://m.media-amazon.com/images/M/MV5BMDgyZTI2YmYtZmI4ZC00MzE0LWIxZWYtMWRlZWYxNjliNTJjXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg"
  },
  {
    id: "tt0158811",
    name: "Muppets from Space",
    year: 1999,
    votes: 3,
    cover:
      "https://m.media-amazon.com/images/M/MV5BODI2Zjc5YzMtNzQ1NS00NGVmLWExYzgtMzFlY2NiMGMzZjRjXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
  },
  {
    id: "tt0062622",
    name: "2001: A Space Odyssey",
    year: 1968,
    votes: 1,
    cover:
      "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  }
];

// TODO 1. Use this function as a callback to increase votes.
const updateVoteCount = function updateVoteCount(prevState) {
  const newFilms = prevState.films.map(function(film) {
    if (film.id === clickedFilmId) {
      return Object.assign({}, film, { votes: film.votes + 1 });
    } else {
      return film;
    }
  });

  const sortedFilms = newFilms.sort((a, b) => b.votes - a.votes);

  return { films: sortedFilms };
};

function Header() {
  return (
    <p className="subheading">
      The best <strong>drive-in theather</strong> around the block.
    </p>
  );
}

// TODO 2. Add button to increase vote. Include on click handler.
// Tip: Add `id` to button to make it easy to identify.
function Movie(props) {
  return (
    <article>
      <h3>{props.name}</h3>
      <div class="year">Released on {props.year}</div>
      <img alt={`Poster of ${props.name}`} src={props.image} />
    </article>
  );
}

function MovieList() {
  return (
    <React.Fragment>
      <h2>Now playing</h2>
      <section>
        {seed.map(function(item) {
          return (
            <Movie
              key={item.id}
              name={item.name}
              year={item.year}
              image={item.cover}
            />
          );
        })}
      </section>
    </React.Fragment>
  );
}

function Homepage() {
  <React.Fragment>
    <Header />
    <MovieList />
  </React.Fragment>;
}

// TODO. Create a new MovieApp component which includes tha app's state.

const renderTarget = document.getElementById("app");
ReactDOM.render(<Homepage />, renderTarget);
