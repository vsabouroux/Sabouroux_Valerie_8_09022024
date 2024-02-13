import vslogoSmall from "../../assets/vs-logoSmall.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="vs-footer">
      <div className="bandeau">
        <img src={vslogoSmall} alt="logo vs" className="vs-small-logo" />
        <p>2024 - Réalisé par Valérie Sabouroux</p>
       
      </div>
    </footer>
  );
}

export default Footer;
