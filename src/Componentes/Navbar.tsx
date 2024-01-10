import userIcon from "../Imagenes/user-icon.png";
import homeIcon from "../Imagenes/home-icon.png";
import groupIcon from "../Imagenes/group-icon.png";
import { Link } from "react-router-dom";
import '../stylesheets/Navbar.css'

function Navbar() {
  return (
    <section className="icon-section">
      <img src={homeIcon} className="icon-image"></img>
      <Link to='/writerprofile'>
          <img src={groupIcon} className="icon-image"></img>
        </Link>
      <Link to="/myprofile">
        <img src={userIcon} className="icon-image"></img>
      </Link>
    </section>
  );
}

export default Navbar;
