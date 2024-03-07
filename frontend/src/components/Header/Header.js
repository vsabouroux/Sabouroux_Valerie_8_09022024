import vslogo from "../../assets/vs-logo.webp";
import "./Header.scss";
import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
// byPrefixAndName.fas['user']
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
            <NavLink to="/SignIn" className="nav-link">
              {/* <FontAwesomeIcon icon="fa-solid fa-user" style={{color: "#120dbe",}} /> */}
              Se connecter
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
