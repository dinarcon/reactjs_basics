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
      <div className="votes">{props.votes} votos</div>
      <img alt="Portada de ${props.name}" src={props.img_url} />
    </article>
  );
}

class MovieApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [].concat(seed)
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <h2>En cartelera</h2>
        <section>
          {this.state.films.map(function(film) {
            return (
              <Movie
                key={film.id}
                name={film.name}
                year={film.year}
                votes={film.votes}
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
