const vDOM = (
  <header>
    <h1>Cine de las estrellas</h1>
    <p className="subheading">
      El mejor <strong>cine al aire libre</strong> de Managua.
    </p>
  </header>
);

const renderTarget = document.getElementById("app");
ReactDOM.render(vDOM, renderTarget);
