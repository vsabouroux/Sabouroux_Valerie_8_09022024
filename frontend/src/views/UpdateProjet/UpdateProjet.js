import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./UpdateProjet.scss";
import ProjetForm from "../../components/ProjetForm/ProjetForm";
import BackArrow from "../../components/BackArrow/BackArrow";
import { getProjet } from "../../lib/common";
// import { getProjet, updateProjet } from "../../lib/common";
import { APP_ROUTES } from "../../utils/constants";
import { useUser } from "../../lib/customHooks";
import projetAdd from "../../assets/projet_add.jpg";

function UpdateProjet() {
  const [projet, setProjet] = useState(null);
  const params = useParams();
  // console.log("ID extrait des paramètres de l'URL:", params.id);
  const navigate = useNavigate();
  const { connectedUser, auth, userLoading } = useUser();
  const [created, setCreated]=useState(false);
  // const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (!userLoading) {
      if (!connectedUser || !auth) {
        navigate(APP_ROUTES.SIGN_IN);
      }
    }
  }, [auth, connectedUser, navigate, userLoading]);

  useEffect(() => {
    async function getItem() {
      const data = await getProjet(params.id);
      if (data) {
        setProjet(data);
      }
    }
    getItem();
  }, [params.id]); 
  //Au départ [] puis params.id

  // const handleSubmit = async (updatedData) => {
  //   console.log(params.id, updatedData);
  
    // try {
    
    //   const response = await updateProjet(updatedData, params.id);
    //   if (response && !response.error) {
    //     setUpdated(true);
    //   } else {
    //     // Gérer l'erreur de mise à jour ici
    //     console.error(response.message);
    //   }
    // } catch (err) {
    //   console.error(err);
    //   // Gérer l'erreur de mise à jour ici
    // }
  // };

  return (
    <div className="content-container">
      <BackArrow />
      <div className={styles.Container}>
        {!created ? (
          <>
            <h1>Modifier votre projet</h1>
            <p>Vous pouvez modifier tous les champs</p>
            <ProjetForm projet={projet} validate={setCreated} />
          </>
        ) : (
          <div className={styles.Created}>
            <h1>Merci !</h1>
            <p>votre projet a bien été mis à jour</p>
            <img src={projetAdd} alt="Projet mis à jour" />
            <Link to="/" className="button">
              Retour à l&apos;accueil
            </Link>
          </div>
        )};
      </div>
    </div>
  );
}

export default UpdateProjet;
