// import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import lampeImage from "../../assets/lampe.webp";
// import Footer from "../../components/Footer/Footer";
import CollapseItem from "../../components/Collaps/Collaps";
import "./APropos.scss";

function APropos() {
  return (
    <div>
      <main>
        <Banner
          img={lampeImage}
          className="lampeImage"
          alt="ampoule tenue à bout de bras"
        />
        <div className="APropos">
          <p className="valeurs">
            Voici les valeurs qui guident mon action au quotidien
          </p>
          <CollapseItem
            title="Innovation"
            content="Et cela passe par : l'écoute des évolutions, des transformations, des disruptions qui s'opèrent dans l'environnement, l'adaptation des ressources et des savoir-faire aux évolutions
            le partage avec les clients des innovations pour l'enrichissement continu des missions."
          />
          <CollapseItem
            title="Respect"
            content="Et cela passe par : le respect de ses engagements envers ses ressources (qu’elles soient salariées ou non), ses clients, ses fournisseurs et autres partenaires
            le développement d’un comportement loyal envers ces mêmes acteurs, l’adoption en toutes circonstances d’une attitude honnête."
          />
          <CollapseItem
            title="Adaptation"
            content="Et cela passe par : la qualité de l'écoute, la capacité à mobiliser en un minimum de temps les bonnes ressources au service du projet du client, la capacité à se remettre réellement en cause, à anticiper les transformations,
            la capacité à intégrer dans ses missions les innovations."
          />
           <p className="CV">Mon CV est accessible en cliquant sur le logo en haut de la page </p>
        </div>
      </main>
      {/* <Footer /> */} 
    </div>
  );
}
export default APropos;
