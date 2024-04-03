import React from "react";
// import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../utils/constants";
import Banner from "../../components/Banner/Banner";
import enteteImage from "../../assets/entete.webp";
import Card from "../../components/Card/Card";
// import Footer from "../../components/Footer/Footer";
import Projets from "../../datas/Projets.json";
import "./Home.scss";

function Home() {
  return (
    <div className="App">
      {/* <Header /> */}
      <main>
        <Banner
          img={enteteImage}
          texte="Pour vous, des projets qui vous ressemblent"
        />
        <div className="button_container"> 
        <button className="add_projet_button">
          <Link to={APP_ROUTES.ADD_PROJET}>Ajouter un projet</Link>
        </button>
        </div>
        <section className="Projet">
          {/*Création boucle avec map pour afficher tous les logements présents dans le fichier Projets.json*/}
          {Projets.map(({ id, title, cover }) => (
            <Card
              key={id}
              title={title}
              picture={cover}
              className="Cover"
              id={id}
              alt={`${Projets.title}`}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
export default Home;
