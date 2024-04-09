import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './AddProjet.scss';
import ProjetForm from '../../components//ProjetForm/ProjetForm';
import BackArrow from '../../components/BackArrow/BackArrow';
import { useUser } from '../../lib/customHooks';
import { APP_ROUTES } from '../../utils/constants';
import projetAdd from '../../assets/projet_add.jpg';

function AddProjet() {
  const navigate = useNavigate();
  const { connectedUser, auth, userLoading } = useUser();
  const [created, setCreated] = useState(false);
  useEffect(() => {
    if (!userLoading) {
      if (!connectedUser || !auth) {
        navigate(APP_ROUTES.SIGN_IN);
      }
    }
  }, [auth, connectedUser, navigate, userLoading]);

  return (
    <div className="content-container">
      <BackArrow />
      <div className={styles.Container}>
        {!created ? (
          <>
            <h1>Ajouter un projet</h1>
            <p>Tous les champs sont obligatoires</p>
            <ProjetForm validate={setCreated} />
          </>
        ) : (
          <div className={styles.Created}>
            <h1>Merci !</h1>
            <p>Votre projet a bien été publié</p>
            <img src={projetAdd} alt="Projet ajouté" />
            <Link to="/" className="button">Retour à l&apos;accueil</Link>
          </div>

        )}

      </div>
    </div>
  );
}

export default AddProjet;


// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios'; // Import d'Axios on aurait pu aussi travailler avec fetch
// import ProjetForm from "../../components/ProjetForm/ProjetForm";
// import BackArrow from "../../components/BackArrow/BackArrow";
// import { useUser } from "../../lib/customHooks";
// import { APP_ROUTES } from "../../utils/constants";
// import { API_ROUTES } from "../../utils/constants";
// import projetAdd from "../../assets/projet_add.jpg";
// import styles from "./AddProjet.scss";

// function AddProjet() {
//   const navigate = useNavigate();
//   const { connectedUser, auth, userLoading } = useUser();
//   const [created, setCreated] = useState(false);

//   useEffect(() => {
//     if (!userLoading) {
//       if (!connectedUser || !auth) {
//         navigate(APP_ROUTES.SIGN_IN);
//       }
//     }
//   }, [auth, connectedUser, navigate, userLoading]);

//   // Fonction pour gérer l'envoi des données du formulaire au backend
//   const handleSubmit = (formData) => {
//     axios.post(API_ROUTES.PROJETS_ADD, formData)
//       .then(() => {
//         // Mettre à jour l'état pour indiquer si le projet a été créé avec succès ou non
//         setCreated(true);
//       })
//       .catch(error => {
//         console.error('Erreur lors de l\'ajout du projet:', error);
//         // Mettre à jour l'état pour indiquer que le projet n'a pas été créé
//         setCreated(false);
//       });
//   };

//   return (
//     <div className="content-container">
//       <BackArrow />
//       <div className={styles.Container}>
//         {!created ? (
//           <>
//             <h1>Ajouter un projet</h1>
//             <p>Tous les champs sont obligatoires</p>
//             {/* Passer la fonction de rappel handleSubmit au composant ProjetForm */}
//             <ProjetForm onSubmit={handleSubmit} />
//           </>
//         ) : (
//           <div className={styles.Created}>
//             <h1>Merci!</h1>
//             <p>Votre projet a bien été publié</p>
//             <img src={projetAdd} alt="Projet ajouté" />
//             <Link to={APP_ROUTES.HOME} className="button">
//               Retour à l'accueil
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AddProjet;

