import vslogo from "../../assets/vs-logo.webp";
import "./Header.scss";
import { NavLink } from "react-router-dom";

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
        </ul>
      </nav>
    </header>
  );
}
export default Header;
