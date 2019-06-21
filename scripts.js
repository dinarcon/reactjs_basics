const seed = [
  {
    id: "tt0117705",
    name: "Space Jam",
    year: "1996",
    votes: 5,
    cover:
      "https://m.media-amazon.com/images/M/MV5BMDgyZTI2YmYtZmI4ZC00MzE0LWIxZWYtMWRlZWYxNjliNTJjXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg"
  },
  {
    id: "tt0158811",
    name: "Muppets from Space",
    year: "1999",
    votes: 3,
    cover:
      "https://m.media-amazon.com/images/M/MV5BODI2Zjc5YzMtNzQ1NS00NGVmLWExYzgtMzFlY2NiMGMzZjRjXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
  },
  {
    id: "tt0062622",
    name: "2001: A Space Odyssey",
    year: "1968",
    votes: 1,
    cover:
      "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  }
];

function Header() {
  return (
    <header>
      <h1>The Starry Theater</h1>
      <p className="subheading">
        The best <strong>drive-in theater</strong> around the block.
      </p>
    </header>
  );
}

function Movie(props) {
  return (
    <article>
      <h3>{props.name}</h3>
      <div className="year">Released on {props.year}</div>
      <button id={props.id} onClick={props.handleClick}>
        +1 vote
      </button>
      <div className="votes">{props.votes} votes</div>
      <img alt="Portada de ${props.name}" src={props.img_url} />
    </article>
  );
}

function MovieList(props) {
  const { films, handleClick } = props;
  return (
    <React.Fragment>
      <h2>Now playing</h2>

      <section>
        {films.map(film => {
          return (
            <Movie
              key={film.id}
              id={film.id}
              name={film.name}
              year={film.year}
              votes={film.votes}
              handleClick={handleClick}
              img_url={film.cover}
            />
          );
        })}
      </section>
    </React.Fragment>
  );
}

function AddMovieForm(props) {
  const { handleSubmit } = props;
  return (
    <React.Fragment>
      <h2>Add movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" name="id" />
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Publication year:
          <input type="number" name="year" />
        </label>
        <label>
          URL to cover image:
          <input type="url" name="cover" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  );
}

class MovieApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [].concat(seed)
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    const clickedFilmId = event.target.id;

    this.setState(function(prevState) {
      const newFilms = prevState.films.map(function(film) {
        if (film.id === clickedFilmId) {
          return Object.assign({}, film, { votes: film.votes + 1 });
        } else {
          return film;
        }
      });

      return { films: newFilms };
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const formDOM = event.target;
    const formValuesDOM = formDOM.elements;
    const newMovie = {
      id: formValuesDOM.id.value,
      name: formValuesDOM.name.value,
      year: formValuesDOM.year.value,
      votes: 0,
      cover: formValuesDOM.cover.value
    };

    this.setState({ films: [...this.state.films, newMovie] });
  }

  render() {
    const sortedFilms = this.state.films.sort((a, b) => b.votes - a.votes);

    return (
      <React.Fragment>
        <Header />

        <MovieList films={sortedFilms} handleClick={this.handleClick} />

        <AddMovieForm handleSubmit={this.handleSubmit} />
      </React.Fragment>
    );
  }
}

const renderTarget = document.getElementById("app");
ReactDOM.render(<MovieApp />, renderTarget);
