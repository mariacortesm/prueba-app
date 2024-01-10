import userIcon from "../Imagenes/user-icon.png";
import homeIcon from "../Imagenes/home-icon.png";
import groupIcon from "../Imagenes/group-icon.png";
import { Link } from "react-router-dom";
import "../stylesheets/Navbar.css";

function Navbar() {
  return (
    <section className="icon-section route_page">
      <Link to="/homepage">
        <img src={homeIcon} className="icon-image" />
      </Link>
      <Link to="/writerprofile">
        <img src={groupIcon} className="icon-image" />
      </Link>
      <Link to="/myprofile">
        <img src={userIcon} className="icon-image" />
      </Link>
    </section>
  );
}

export default Navbar;
