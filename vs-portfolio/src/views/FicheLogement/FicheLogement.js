import { Navigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slideshow from "../../components/Slideshow/Slideshow";
import CollapseItem from "../../components/Collaps/Collaps";
import Tag from "../../components/Tag/Tag";
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
  const { title, location, description, equipments, tags } = logement;

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
