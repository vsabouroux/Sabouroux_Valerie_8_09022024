import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../utils/constants";
import Banner from "../../components/Banner/Banner";
import enteteImage from "../../assets/entete.webp";
import Card from "../../components/Card/Card";
import { getProjets } from "../../lib/common"; // Ajout de import de la fonction getProjets
import "./Home.scss";

function Home() {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    getProjets() // Appel à la fonction pour récupérer les projets
      .then((formData) => setProjets(formData))
      .catch((error) => console.error("Error fetching projets:", error));
  }, []);
  return (
    <div className="App">
      {/* <Header /> */}
      <main>
        <Banner
          img={enteteImage}
          texte="Pour vous, des projets qui vous ressemblent" 
        />
        <div className="button_container"> 
        {/* <button className="add_projet_button"> */}
          <Link to={APP_ROUTES.ADD_PROJET}className="add_projet_button">Ajouter un projet</Link>
        {/* </button> */}
        </div>
        <section className="Projet">
          {/*Création boucle avec map pour afficher tous les logements présents dans le fichier Projets.json*/}
          {projets.map(({ id, title, imageUrl }) => (
            <Card
              key={id}
              title={title}
              imageUrl={`/images/${imageUrl}`} 
              className="Cover"
              id={id}
              alt={title}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
export default Home;
