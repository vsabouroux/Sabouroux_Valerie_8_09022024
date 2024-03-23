// import githubLogo from "../../assets/github.svg";
// import linkedinLogo from "../../assets/linkedin-in.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./Footer.scss";

function Footer() {
  return (
    <footer className="vs-footer">
      {/* <div className="bandeau">
        <img src={vslogoSmall} alt="logo vs" className="vs-small-logo" />
      </div> */}
      <div className="footerElements">
        <div className="realisation">
          <p>2024 - Réalisé par Valérie Sabouroux</p>
        </div>
        {/* problème liens github et linkedin Les logos n'apparaissent pas sur PA ! */}
        <div className="liens">
          <a 
            href="https://github.com/vsabouroux/"
            target="_blank"
            rel="noopener noreferrer"
          >
             <FontAwesomeIcon icon={faGithub} className="github-icon" />
           {/* <img src={githubLogo} alt="logo GitHub" /> */}
           {/* <svg xmlns="http://www.w3.org/2000/svg" height="10" width="9.6875" viewBox="0 0 496 512" className="github-logo" alt="logo GitHub">
              <path fill="currentColor" d={githubLogo} />
            </svg> */}
          </a>
          <a
            href="https://www.linkedin.com/in/vsabouroux/"
            target="_blank"
            rel="noopener noreferrer"
          >
             <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
          {/* <img src={linkedinLogo} alt="logo réseau social LinkedIn" /> */}
          </a>
        </div>
        <div className="mentionsLegales">
          <p>Mentions légales</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
