import { Link } from "react-router-dom";
import "./Card.scss";
// "Card" (vignettes de la pge Home) est le composant qui décrit de quoi il est fait
//et la boucle "map" est faite sur la page qui doit afficher TOUS les logements soit la Home
function Card({ title, id }) {
  const imageUrl =`https://vs-portfolio-api-0c0adab5969b.herokuapp.com/images/`;
  return (
    <Link className="card-link" to={`/FicheProjet/${id}`}>
      <div className="Card">
        <div className="Gradient"></div> 
        <img src={imageUrl} alt="projet" className="CardImage" />
        <h3>{title}</h3>
       
      </div>
    </Link>
  );
}

export default Card;

//NDLR : la source de l'image utilise l'URL générée par MongoDB soit "imageUrl"
// <img src={`/images/${imageUrl}`} alt="projet" className="CardImage" /> ==> donc pas correct!
//function Card({ title, imageUrl, id }) 