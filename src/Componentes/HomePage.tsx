import "../stylesheets/HomePage.css";
import exploreUsers from "../Imagenes/explore-users.png";

function HomePage() {
  return (
    <main className="container-homepage route_page">
      <section className="section-input-search">
        <input placeholder="Buscar..." className="input-search"></input>
      </section>
      <section className="section-categories">
        <p className="text-categories">Categorías</p>
        <button className="button-categories">Ciencias humanas</button>
        <button className="button-categories">Ciencias políticas</button>
        <button className="button-categories">Ciencias sociales</button>
      </section>
      <section className="icon-section-users">
        <p>Explora</p>
        <img src={exploreUsers} className="icon-users" />
        <img src={exploreUsers} className="icon-users" />
        <img src={exploreUsers} className="icon-users" />
        <img src={exploreUsers} className="icon-users" />
      </section>
    </main>
  );
}

export default HomePage;
