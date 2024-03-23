import vslogo from "../../assets/vs-logo.webp";
import "./Header.scss";
import { NavLink } from "react-router-dom";
// import fontawesome from "@fortawesome/fontawesome-free";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from "@fortawesome/free-solid-svg-icons";
// library.add(faUser);

function Header() {
  return (
    <header className="vs-header">
      <img src={vslogo} alt="logo vs portolio" className="vs-logo" />
      <nav id="sidebar">
        <ul>
          <li className="accueil">
            <NavLink to="/" className="nav-link">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/APropos" className="nav-link">
              A propos
            </NavLink>
          </li>
          <li className="contact">
            <NavLink to="/Contact" className="nav-link">
              Contact
            </NavLink>
          </li>
          <li className="seconnecter">
            <NavLink to="/SignIn" className="nav-link-signin">
              <FontAwesomeIcon icon={faUser} className="faUser" style={{color: "#120dbe",}} />
              Se connecter
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
