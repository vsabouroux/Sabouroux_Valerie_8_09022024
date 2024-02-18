// import vslogoSmall from "../../assets/vs-logoSmall.png";
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
      <div className="mentionsLegales">
        <p>Mentions légales</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
