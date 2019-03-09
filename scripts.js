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

const extraFilms = [
  {
    id: "tt0406375",
    name: "Zathura: A Space Adventure",
    year: "2005",
    votes: 2,
    cover:
      "https://m.media-amazon.com/images/M/MV5BMDc1NzM1OTgtOGYxMS00ZWE1LWEzZWMtNWEyOTI2NDJjOTU2XkEyXkFqcGdeQXVyNjQzNzA2NjM@._V1_SX300.jpg"
  },
  {
    id: "tt0120738",
    name: "Lost in Space",
    year: "1998",
    votes: 4,
    cover:
      "https://m.media-amazon.com/images/M/MV5BMTkwNzEyNTgyN15BMl5BanBnXkFtZTcwODk4NTU0Mg@@._V1_SX300.jpg"
  }
];

function Header() {
  return (
    <header>
      <h1>Cine de las estrellas</h1>
      <p className="subheading">
        El mejor <strong>cine al aire libre</strong> de Managua.
      </p>
    </header>
  );
}

function Movie(props) {
  return (
    <article>
      <h3>{props.name}</h3>
      <div className="year">Publicada en {props.year}</div>
      <button id={props.id} onClick={props.handleClick}>
        +1 voto
      </button>
      <div className="votes">{props.votes} votos</div>
      <img alt="Portada de ${props.name}" src={props.img_url} />
    </article>
  );
}

class MovieApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [].concat(seed),
      showAddMoviesButton: true
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleAddMoviesClick = this.handleAddMoviesClick.bind(this);
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

  handleAddMoviesClick(event) {
    event.preventDefault();

    this.setState({ showAddMoviesButton: false });
    this.setState({ films: this.state.films.concat(extraFilms) });
  }

  render() {
    const sortedFilms = this.state.films.sort((a, b) => b.votes - a.votes);

    return (
      <React.Fragment>
        <Header />
        <h2>En cartelera</h2>

        {this.state.showAddMoviesButton && (
          <button onClick={this.handleAddMoviesClick}>
            Agregar pel&iacute;culas
          </button>
        )}

        <section>
          {sortedFilms.map(film => {
            return (
              <Movie
                key={film.id}
                id={film.id}
                name={film.name}
                year={film.year}
                votes={film.votes}
                handleClick={this.handleClick}
                img_url={film.cover}
              />
            );
          })}
        </section>
      </React.Fragment>
    );
  }
}

const renderTarget = document.getElementById("app");
ReactDOM.render(<MovieApp />, renderTarget);
