import imageRegister from "../Imagenes/image-register.jpeg";
import "../stylesheets/Register.css";
import iconoUser from "../Imagenes/icono-user.png";
import iconoMail from "../Imagenes/icono-mail.png";
import iconoPassword from "../Imagenes/icono-contrasena.png";
import { Link } from "react-router-dom";


function Register() {
  return (
    <main className="register-container route_page">
      <section className="section-text">
        <img src={imageRegister} className="image-register"></img>
        <h1 className="welcome-text">¡CREA TU CUENTA!</h1>
        <h2 className="welcome-text">
          ¿Ya tienes una cuenta? <a href="www.ejemplo.com">Inicia sesión</a>
        </h2>
      </section>
      <section className="section-input">
        <img src={iconoUser} className="image-input"></img>
        <input className="input-text" placeholder="Nombre_de_usuario"></input>
      </section>
      <section className="section-input">
        <img src={iconoMail} className="image-input"></img>
        <input className="input-text" placeholder="Correo_electrónico"></input>
      </section>
      <section className="section-input">
        <img src={iconoPassword} className="image-input"></img>
        <input className="input-text" placeholder="Contraseña"></input>
      </section>
      <section className="section-bton">
        <Link to='/login'>
        <button className="bton-input">REGISTRARSE</button>
        </Link>
      </section>
    </main>
  );
}

export default Register;
