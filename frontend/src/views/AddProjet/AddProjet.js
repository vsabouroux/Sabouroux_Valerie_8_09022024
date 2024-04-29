import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AddProjet.scss';
import ProjetForm from '../../components//ProjetForm/ProjetForm';
import BackArrow from '../../components/BackArrow/BackArrow';
// import { useUser } from '../../lib/customHooks';
// import { APP_ROUTES } from '../../utils/constants';
import projetAdd from '../../assets/projet_add.jpg';


function AddProjet() {
  // const navigate = useNavigate();
  // const { connectedUser, auth, userLoading } = useUser();
  const [created, setCreated] = useState(false);

   // Hook useEffect pour mettre à jour la liste des projets une fois que le projet est créé avec succès
   useEffect(() => {
    if (created) {
      console.log("projetajoutéavec succès");
    }
  }, [created]);

  return (
    <div className="content-container">
      <BackArrow />
      <div className={styles.Container}>
        {!created ? (
          <>
            <h1>Ajouter un projet</h1>
            <h2>Tous les champs avec une * sont obligatoires</h2>
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