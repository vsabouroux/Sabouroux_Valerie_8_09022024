import vslogo from "../../assets/vs-logo.webp";
import "./Header.scss";
import { NavLink } from "react-router-dom";
// import fontawesome from "@fortawesome/fontawesome-free";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from "@fortawesome/free-solid-svg-icons";
// library.add(faUser);
import QRCode from "react-qr-code";

function Header() {
  // URL du CV PDF (pour le test local)
  const cvUrl = "/Sabouroux_Valerie_CV_032024.pdf";

  // Génére le lien à partir de l'URL du CV
  const qrCodeData = window.location.origin + cvUrl;
  // Configuration des paramètres d'image du QR code (logo)

  return (
    <header className="vs-header">
      <div className="qr-code-container">
          {/* Ajout du QR code  avec le lien vers le CV */}
          <QRCode value={qrCodeData} logo={vslogo} className="qr-code" />
        {/* <img src={vslogo} alt="logo vs portolio" className="qr-code-logo" /> */}
      </div>
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
              <FontAwesomeIcon
                icon={faUser}
                className="faUser"
                style={{ color: "#120dbe" }}
              />
              Se connecter
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
