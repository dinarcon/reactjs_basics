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

class AddMovieForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      year: "",
      cover: "",
      isFormValid: true
    };

    this.handleRandomClick = this.handleRandomClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleRandomClick() {
    this.setState({ id: Math.floor(Math.random() * 1000000) });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  validateForm(event) {
    event.preventDefault();
    let isValid = true;

    // Make sure to use an arrow function or this will not be bound to the
    // component inside the map callback.
    ["id", "name", "year", "cover"].map(key => {
      // Make sure to make a comparison, not an assignment .
      if (this.state[key] === "") {
        isValid = false;
      }
    });

    if (isValid) {
      this.setState({
        id: "",
        name: "",
        year: "",
        cover: "",
        isFormValid: true
      });

      // Call submit handler sent via props.
      // It is important to manually pass the event.
      this.props.handleSubmit(event);
    } else {
      this.setState({ isFormValid: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>Add movie</h2>

        <ReactRouterDOM.Link to="/">Back to movie listing</ReactRouterDOM.Link>

        {!this.state.isFormValid && (
          <p className="form--invalid">Invalid form</p>
        )}

        <form onSubmit={this.validateForm}>
          <label>
            ID:
            <input
              type="text"
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Publication year:
            <input
              type="number"
              name="year"
              value={this.state.year}
              onChange={this.handleChange}
            />
          </label>
          <label>
            URL to cover image:
            <input
              type="url"
              name="cover"
              value={this.state.cover}
              onChange={this.handleChange}
            />
          </label>
          <input
            type="button"
            value="Random ID"
            onClick={this.handleRandomClick}
          />
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

function Homepage(props) {
  return (
    <React.Fragment>
      <Header />
      <ReactRouterDOM.Link to="/add">Add movie</ReactRouterDOM.Link>
      <MovieList {...props} />
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
    return (
      <ReactRouterDOM.BrowserRouter>
        <ReactRouterDOM.Switch>
          <ReactRouterDOM.Route
            exact
            path="/"
            render={() => {
              const sortedFilms = this.state.films.sort(
                (a, b) => b.votes - a.votes
              );
              return (
                <Homepage films={sortedFilms} handleClick={this.handleClick} />
              );
            }}
          />
          <ReactRouterDOM.Route
            path="/add"
            render={() => {
              return <AddMovieForm handleSubmit={this.handleSubmit} />;
            }}
          />
        </ReactRouterDOM.Switch>
      </ReactRouterDOM.BrowserRouter>
    );
  }
}

const renderTarget = document.getElementById("app");
ReactDOM.render(<MovieApp />, renderTarget);
