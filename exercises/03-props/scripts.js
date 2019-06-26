// TODO 1. Use this array as initial list of movies.
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

function Header() {
  return (
    <p className="subheading">
      The best <strong>drive-in theather</strong> around the block.
    </p>
  );
}

// TODO 2. Pass props to component.
// Note: Functional component recieve a props object as its first argument.
function Movie() {
  return (
    <article>
      <h3>Space Jam</h3>
      <div class="year">Released on 1996</div>
      <img
        alt="Portada de Space Jam"
        src="https://m.media-amazon.com/images/M/MV5BMDgyZTI2YmYtZmI4ZC00MzE0LWIxZWYtMWRlZWYxNjliNTJjXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg"
      />
    </article>
  );
}

// TODO 3. Iterate over the `seed` constant to present the movies.
// Note: Props can be passed down to the component using a syntax similar to
//   HTML attributes. Example: <Movie name="Space Jam" />
// Tip: You can use Array.map()
function MovieList() {
  return (
    <React.Fragment>
      <h2>Now playing</h2>
      <section>
        <Movie />
        <Movie />
        <Movie />
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

const renderTarget = document.getElementById("app");
ReactDOM.render(<Homepage />, renderTarget);
