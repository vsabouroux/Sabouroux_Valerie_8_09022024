import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import enteteImage from "../../assets/entete.webp";

import Card from "../../components/Card/Card";

import Footer from "../../components/Footer/Footer";
import Logements from "../../datas/Logements.json";
import "./Home.scss";

function Home() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner img={enteteImage} texte="Pour vous, des projets qui vous ressemblent" />
        <section className="Appart">
          {/*Création boucle avec map pour afficher tous les logements présents dans le fichier Logements.json*/}
          {Logements.map(({ id, title, cover }) => (
            <Card
              key={id}
              title={title}
              picture={cover}
              className="Cover"
              id={id}
              alt={`${Logements.title}`}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Home;
