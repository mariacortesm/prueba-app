import imageOnboarding from "../Imagenes/imagen-onboarding.jpeg";
import "../stylesheets/Onboarding.css";
import { Link } from "react-router-dom";

function Onboarding() {
  return (
    <main className="onboarding-container route_page-no-navbar">
      <section className="section-onboarding">
        <p className="description-one">
          ¡En VORTEX SOLUCIONES impulsamos tus ideas de investigación!
        </p>
        <img
          className="image-onboarding"
          src={imageOnboarding}
          alt="Imagen-de-onboarding"
        />
        <p className="description-two">
          Te conectamos con escritores expertos para mejorar tus trabajos y
          ofrecerte la oportunidad de destacar. Tu camino hacia el éxito
          académico comienza aquí.
        </p>
      </section>
      <section className="section-bton">
        <Link to="/register">
          <button className="bton-onboarding">SIGUIENTE</button>
        </Link>
      </section>
    </main>
  );
}

export default Onboarding;
