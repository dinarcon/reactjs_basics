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

const vDOM = (
  <React.Fragment>
    <Header />
    <h2>En cartelera</h2>
    <section>
      <article>
        <h3>Space Jam</h3>
        <div className="year">Publicada en 1996</div>
        <img
          alt="Portada de Space Jam"
          src="https://m.media-amazon.com/images/M/MV5BMDgyZTI2YmYtZmI4ZC00MzE0LWIxZWYtMWRlZWYxNjliNTJjXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg"
        />
      </article>
      <article>
        <h3>Muppets from Space</h3>
        <div className="year">Publicada en 1999</div>
        <img
          alt="Portada de Muppets from Space"
          src="https://m.media-amazon.com/images/M/MV5BODI2Zjc5YzMtNzQ1NS00NGVmLWExYzgtMzFlY2NiMGMzZjRjXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
        />
      </article>
      <article>
        <h3>2001: A Space Odyssey</h3>
        <div className="year">Publicada en 1968</div>
        <img
          alt="Portada de 2001: A Space Odyssey"
          src="https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        />
      </article>
    </section>
  </React.Fragment>
);

const renderTarget = document.getElementById("app");
ReactDOM.render(vDOM, renderTarget);
