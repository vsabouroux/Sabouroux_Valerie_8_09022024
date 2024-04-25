import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./Footer.scss";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  const handleMentionsLegalesClick = () => {
    setShowModal(true);
  };
  return (
    <footer className="vs-footer">
      <div className="footerElements">
        <div className="realisation">
          <p>2024 - Réalisé par Valérie Sabouroux</p>
        </div>
        <div className="liens">
          <a 
            href="https://github.com/vsabouroux/"
            target="_blank"
            rel="noopener noreferrer"
            title="Mon profil GitHub (s'ouvre dans une nouvelle fenêtre)"
          >
             <FontAwesomeIcon icon={faGithub} className="github-icon"/>
           {/* <img src={githubLogo} alt="logo GitHub" /> */}
           {/* <svg xmlns="http://www.w3.org/2000/svg" height="10" width="9.6875" viewBox="0 0 496 512" className="github-logo" alt="logo GitHub">
              <path fill="currentColor" d={githubLogo} />
            </svg> */}
          </a>
          <a
            href="https://www.linkedin.com/in/vsabouroux/"
            target="_blank"
            rel="noopener noreferrer"
            title="Mon profil LinkedIn (s'ouvre dans une nouvelle fenêtre)"
          >
             <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
          {/* <img src={linkedinLogo} alt="logo réseau social LinkedIn" /> */}
          </a>
        </div>
        <div className="mentionsLegales">
          <p onClick={handleMentionsLegalesClick}>Mentions légales</p>
        </div>
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </footer>
  );
}

export default Footer;
