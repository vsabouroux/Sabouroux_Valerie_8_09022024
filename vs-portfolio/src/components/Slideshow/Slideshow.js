import React, { useState } from "react";
import fleche_droite from "../../assets/fleche_droite.png";
import fleche_gauche from "../../assets/fleche_gauche.png";
import "./Slideshow.scss";
//J'aurais pu installer aussi le package  React Slider Responsive ! https://www.npmjs.com/package/react-responsive-carousel mais pas autorisé ds ce projet
const Slideshow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // l'opérateur "%" permet de faire en sorte que lorsque l'UI arrive à la dernière photo s'il clique sur la suivante il reviendra à la 1ère
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length);
  };
  // ici la fonction fléchée va faire une sorte de boucler cad que si la diapo est la 1ere du tableau alors l'app va renvoyer la dernière photo
  // et sinon ce sera la précédente dans le tableau
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
  };
  
  const hideButtons = pictures.length === 1;
  return (
    <div className="slideshow">
      {!hideButtons && (
        <>
          <button className="prev" onClick={prevSlide}>
            <img src={fleche_gauche} alt="fleche_gauche" />
          
          </button>
          <button className="next" onClick={nextSlide}>
            <img src={fleche_droite} alt="fleche_droite" />
          </button>
        
        </>
      )}
      <img
        key={currentSlide}
        src={pictures[currentSlide]}
        alt={`Logement ${currentSlide + 1}`}
      />
      {!hideButtons && (
        <div className="counter">
          {currentSlide + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
