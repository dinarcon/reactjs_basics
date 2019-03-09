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
      <img alt="Portada de ${props.name}" src={props.img_url} />
    </article>
  );
}

const vDOM = (
  <React.Fragment>
    <Header />
    <h2>En cartelera</h2>
    <section>
      <Movie
        name="Space Jam"
        year="1996"
        img_url="https://m.media-amazon.com/images/M/MV5BMDgyZTI2YmYtZmI4ZC00MzE0LWIxZWYtMWRlZWYxNjliNTJjXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg"
      />
      <Movie
        name="Muppets from Space"
        year="1999"
        img_url="https://m.media-amazon.com/images/M/MV5BODI2Zjc5YzMtNzQ1NS00NGVmLWExYzgtMzFlY2NiMGMzZjRjXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
      />
      <Movie
        name="2001: A Space Odyssey"
        year="1968"
        img_url="https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      />
    </section>
  </React.Fragment>
);

const renderTarget = document.getElementById("app");
ReactDOM.render(vDOM, renderTarget);
