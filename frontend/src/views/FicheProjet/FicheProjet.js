import { Navigate, useParams } from "react-router-dom";
import CollapseItem from "../../components/Collaps/Collaps";
import Tag from "../../components/Tag/Tag";

import "./FicheProjet.scss";

// useParams = hook utilisé pour extraire les paramètres de l'URL dans un composant fonctionnel. Ici on veut récupérer notamment les "pictures" du projet
// et on se repèrera avec l'id du projet

const FicheProjet = ({ projets }) => {
  // Récupérer les informations du projet, grace è l'ID de URL et le data.json
  const { id } = useParams();

  const projet = projets.find((projet) => projet.id === id);

  if (!projet) {
    // Rediriger vers la page NoMatch si le projet n'est pas trouvé. En fait ce n'est pas faire un "lien" mais une redirection ! avec "Navigate"
    return (
      // "Link" embarque une navigation alors que "Navigate" redirige
      <Navigate to="/NoMatch" />
    );
  }

  //Si le preojet est trouvé alors on affiche tout
  const { imageUrl, title, description, skills, tags } = projet;
  // Diviser la chaîne de tags en un tableau de tags individuels
  // const tagsArray = tags.split(",").map((tag) => tag.trim());


  return (
    <div>
      {/* <Header /> il est embarqué au niveau du fichier "app.js" du frontend pour économie de lignes */}
      <main>
      <div  className="ImageProjet"> 
          <img src={imageUrl} alt={title} />
          </div>
        <section>
          {/* <div className="Carrousel">
            <Slideshow pictures={projet.carouselImages.map(pic => `../images/carousel-images${pic}`)} />
          </div> */}
      
          <div className="Entete-HostGlobal">
            <div className="Entete">
              <div className="GlobalProjet">
                <h1 className="TitreProjet">{title}</h1>
                <Tag tags={tags} />
                
              </div>
            </div>
          </div>
          <div className="MenuAccordeon">
            <CollapseItem title="Description" content={description} />
            <CollapseItem
              title="Compétences"
              content={
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default FicheProjet;
