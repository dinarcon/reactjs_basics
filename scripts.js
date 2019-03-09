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

function Movie() {
  return (
    <article>
      <h3>Space Jam</h3>
      <div className="year">Publicada en 1996</div>
      <img
        alt="Portada de Space Jam"
        src="https://m.media-amazon.com/images/M/MV5BMDgyZTI2YmYtZmI4ZC00MzE0LWIxZWYtMWRlZWYxNjliNTJjXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg"
      />
    </article>
  );
}

const vDOM = (
  <React.Fragment>
    <Header />
    <h2>En cartelera</h2>
    <section>
      <Movie />
      <Movie />
      <Movie />
    </section>
  </React.Fragment>
);

const renderTarget = document.getElementById("app");
ReactDOM.render(vDOM, renderTarget);
