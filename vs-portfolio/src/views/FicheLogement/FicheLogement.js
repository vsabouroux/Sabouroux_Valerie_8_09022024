import { Navigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slideshow from "../../components/Slideshow/Slideshow";
import CollapseItem from "../../components/Collaps/Collaps";
import Tag from "../../components/Tag/Tag";
import StarRating from "../../components/Star/StarRating";
import { useParams } from "react-router-dom";

import "./FicheLogement.scss";

// useParams = hook utilisé pour extraire les paramètres de l'URL dans un composant fonctionnel. Ici on veut récupérer notamment les "pictures" du logement
// et on se repèrera avec l'id du logement

const FicheLogement = ({ logements }) => {
  // Récupérer les informations du logement, grace è l'ID de URL et le data.json
  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    // Rediriger vers la page NoMatch si le logement n'est pas trouvé. En fait ce n'est pas faire un "lien" mais une redirection ! avec "Navigate"
    return (
      // "Link" embarque une navigation alors que "Navigate" redirige
      <Navigate to="/NoMatch" />
    );
  }

  //Si le logement est trouvé alors on affiche tout
  const { title, host, location, description, equipments, tags } = logement;

  return (
    <div>
      <Header />
      <main>
        <section>
          <div className="Carrousel">
            <Slideshow pictures={logement.pictures} />
          </div>
          <div className="Entete-HostGlobal">
            <div className="Entete">
              <div className="GlobalLogement">
                <h1 className="TitreLogement">{title}</h1>
                <div className="Location">{location}</div>

                <Tag tags={tags} />
              </div>
            </div>

            <div className="HostGlobal">
              <div className="HostSemiGlobal">
                <div className="Host">{host.name}</div>
                <img className="HostPicture" src={host.picture} alt="hôte" />
              </div>
              {/* parseInt convertit la valeur de logement.rating en un entier (nombre entier) en utilisant la fonction parseInt . En effet,
        dans le fichier Logement.json, rating est une chaîne de caractère : "4". 
        On appelle le composant StarRating et on lui demande (on "passe" une props) d'aller récupérer le nombre d'étoiles du logement et de l'afficher
        à cet endroit*/}
              <StarRating rating={parseInt(logement.rating)} />
            </div>
          </div>
          <div className="MenuAccordeon">
            <CollapseItem title="Description" content={description} />
            <CollapseItem
              title="Équipements"
              content={
                <ul>
                  {equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FicheLogement;
