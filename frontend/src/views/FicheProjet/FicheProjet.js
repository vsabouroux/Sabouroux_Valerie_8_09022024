import React, {useState, useEffect} from "react";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import { APP_ROUTES } from "../../utils/constants";
import CollapseItem from "../../components/Collaps/Collaps";
import Tag from "../../components/Tag/Tag";
import { useUser } from "../../lib/customHooks";
import {  deleteProjet, getProjet } from "../../lib/common";

import "./FicheProjet.scss";

// useParams = hook utilisé pour extraire les paramètres de l'URL dans un composant fonctionnel. Ici on veut récupérer notamment les "pictures" du projet
// et on se repèrera avec l'id du projet

const FicheProjet = ({ projets }) => {
  // Récupérer les informations du projet, grace è l'ID de URL et le data.json
  const { id } = useParams();
  // const projet = projets.find((projet) => projet.id === id);
  const { auth } = useUser(); // On utilise le customHook useUser pour obtenir l'état d'authentification
  const [projetsState, setProjetsState] = useState(projets);
  const [deleted, setDeleted] = useState(false);
  const [projet, setProjet] = useState(null);


   useEffect(() => {
    const fetchProjetDetails = async () => {
      try {
        const projetDetails = await getProjet(id); // Utilise getProjet pour récupérer le projet par ID
        setProjet(projetDetails);
      } catch (error) {
        console.error("Error fetching projet details:", error);
      }
    };

    fetchProjetDetails();
  }, [id]);

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
  if (!projet) {
    return <p>Chargement...</p>;
  }

  const {title, description, skills, tags, githubUrl } = projet;

  // Construction de l'URL complète de l'image
  const imageUrl =`https://vs-portfolio-api-0c0adab5969b.herokuapp.com/images/${projet}`;

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
                  {/* {`/projet/modifier/${projet.id}`} */}
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
