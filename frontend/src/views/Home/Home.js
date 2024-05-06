import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../utils/constants";
import Banner from "../../components/Banner/Banner";
import enteteImage from "../../assets/entete.webp";
import Card from "../../components/Card/Card";
import { getProjets } from "../../lib/common"; // Ajout de import de la fonction getProjets
import "./Home.scss";

function Home({isAuthenticated }) {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    getProjets() // Appel à la fonction pour récupérer les projets
      .then((formData) => setProjets(formData))
      .catch((error) => console.error("Error fetching projets:", error));
  }, []);
  return (
    <div className="App">
      <main>
        <Banner
          img={enteteImage}
          texte="Pour vous, je conçois et développe des projets web qui vous ressemblent"
          alt="image décorative d'un ordinateur portable" 
        />
        <div className="button_container"> 
        {isAuthenticated && ( // Utilisation de l'état d'authentification ici
          <Link to={APP_ROUTES.ADD_PROJET}className="add_projet_button">Ajouter un projet</Link>
          )}
        </div>
    
        <section className="Projet">
          {/*Création boucle avec map pour afficher tous les projets créés ds la BDD*/}
          {projets.map(({ id, title, imageUrl }) => (
            <Card
              key={id}
              title={title}
              imageUrl={imageUrl} 
              className="Cover"
              id={id}
              alt={`Page d'accueil du site "${title}"`}
              // alt={title}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
export default Home;
