import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./UpdateProjet.module.css";
import ProjetForm from "../../components/Projets/ProjetForm/ProjetForm";
import BackArrow from "../../components/BackArrow/BackArrow";
import { getProjet } from "../../lib/common";
import { APP_ROUTES } from "../../utils/constants";
import { useUser } from "../../lib/customHooks";
import projetAdd from "../../assets/projet_add.jpg";

function UpdateProjet() {
  const [projet, setProjet] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const { connectedUser, auth, userLoading } = useUser();
  const [created, setCreated] = useState(false);
  useEffect(() => {
    if (!userLoading) {
      if (!connectedUser || !auth) {
        navigate(APP_ROUTES.SIGN_IN);
      }
    }
  }, [userLoading]);
  useEffect(() => {
    async function getItem() {
      const data = await getProjet(params.id);
      if (data) {
        setProjet(data);
      }
    }
    getItem();
  }, []);

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
            {/* <h1>Merci!</h1> */}
            <p>Le projet a bien été mis à jour</p>
            <img src={projetAdd} alt="Projet mis à jour" />
            <Link to="/" className="button">
              Retour à l&apos;accueil
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpdateProjet;
