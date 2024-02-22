import githubLogo from "../../assets/github.svg";
import linkedinLogo from "../../assets/linkedin-in.svg";
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
            <img src={githubLogo} alt="logo GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/vsabouroux/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="logo réseau social LinkedIn" />
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
