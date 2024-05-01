import vslogo2 from "../../assets/vs-logo2.png";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import * as PropTypes from 'prop-types';
// import styles from './Header.scss';
import { useState } from 'react';
// import fontawesome from "@fortawesome/fontawesome-free";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { library } from '@fortawesome/fontawesome-svg-core';
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// library.add(faUser);
// import QRCode from "react-qr-code";

function Header({ user, setUser }) {

  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false); // État local pour suivre si le lien a été cliqué
  const disconnect = () => {
    localStorage.clear();
    setUser(null);
    navigate('/');
  };
 // Réinitialise l'état isClicked lorsque l'ui clique sur un lien autre que "Se connecter"
 const handleLinkClick = () => {
  setIsClicked(false);
};
  return (
    <header className="vs-header">
      <div className="qr-code-container">
          {/* Ajout du QR code  avec le lien vers le CV */}
          {/* <QRCode value={qrCodeData} logo={vslogo} alt="logo de VS" className="qr-code" /> */}
        <img src={vslogo2} alt="qr-code CV VS" className="qr-code-logo" />
      </div>
      <nav id="sidebar">
        <ul>
          <li className="accueil">
            <NavLink to="/" className="nav-link"onClick={handleLinkClick}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/APropos" className="nav-link" onClick={handleLinkClick}>
              A propos
            </NavLink>
          </li>
          <li className="contact">
            <NavLink to="/Contact" className="nav-link"onClick={handleLinkClick}>
              Contact
            </NavLink>
          </li>
          <li className="seconnecter">
          {!user ? <NavLink to="/Connexion"className={isClicked ? "nav-link active" : "nav-link"} onClick={() => setIsClicked(true)}>Se connecter</NavLink> : <span tabIndex={0} role="button" onKeyUp={disconnect} onClick={disconnect}>Se déconnecter</span> } </li>
          
          {/* <NavLink to="/SignIn" className="nav-link-signin">
              <FontAwesomeIcon
                icon={faUser}
                className="faUser"
                style={{ color: "#120dbe" }}
              />
              Se connecter
            </NavLink> */}
          {/* </li> */}
        </ul>
      </nav>
    </header>
  );
}
Header.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.string,
    token: PropTypes.string,
  }),
  setUser: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
export default Header;
