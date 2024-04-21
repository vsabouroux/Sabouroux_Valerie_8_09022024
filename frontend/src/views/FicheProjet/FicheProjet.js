import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { APP_ROUTES } from "../../utils/constants";
import CollapseItem from "../../components/Collaps/Collaps";
import Tag from "../../components/Tag/Tag";
import { useUser } from "../../lib/customHooks";
import {  deleteProjet } from "../../lib/common";

import "./FicheProjet.scss";

// useParams = hook utilisé pour extraire les paramètres de l'URL dans un composant fonctionnel. Ici on veut récupérer notamment les "pictures" du projet
// et on se repèrera avec l'id du projet

const FicheProjet = ({ projets }) => {
  // Récupérer les informations du projet, grace è l'ID de URL et le data.json
  const { id } = useParams();
  const projet = projets.find((projet) => projet.id === id);
  const { auth } = useUser(); // On utilise le customHook useUser pour obtenir l'état d'authentification
  const [projetsState, setProjetsState] = useState(projets);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async (id) => {
    try {
      await deleteProjet(id);
      setProjetsState(projetsState.filter((projet) => projet.id !== id));
      setDeleted(true); 
    } catch (error) {
      console.error("Error deleting projet:", error);
    }
  };

  const confirmDelete = () => {
    const confirmation = window.confirm("Êtes-vous sûr(e) de vouloir supprimer ce projet ?");
    if (confirmation) {
      handleDelete(id, projet.imageUrl);
    }
  };
  if (deleted) {
    return <Navigate to="/" />;
  }
  // if (!projet) {
  //   // Rediriger vers la page NoMatch si le projet n'est pas trouvé. En fait ce n'est pas faire un "lien" mais une redirection ! avec "Navigate"
  //   return (
  //     // "Link" embarque une navigation alors que "Navigate" redirige
  //     <Navigate to="/NoMatch" />
  //   );
  // }

  //Si le preojet est trouvé alors on affiche tout
  const { imageUrl, title, description, skills, tags, githubUrl } = projet;
  // Diviser la chaîne de tags en un tableau de tags individuels
  // const tagsArray = tags.split(",").map((tag) => tag.trim());


  return (
    <div>
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
                {githubUrl && (
                  <a href={githubUrl} className="lien_gitHub"  target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
                )}
              </div>
              {auth && ( 
                <div className="BoutonsModifierSupprimer">
                  <Link to= {`/projet/modifier/${projet.id}`}  className="edit_button">
                  {/* ={`${APP_ROUTES.UPDATE_PROJET}/${id}`} */}
                  {/* {`/projet/modifier/${projet.id}`}  */}
                    Modifier
                  </Link>
                  <button className="delete_button" onClick={confirmDelete}>
                    Supprimer
                  </button>
                </div>
              )}
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
