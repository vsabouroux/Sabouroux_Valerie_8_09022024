/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useFilePreview } from "../../lib/customHooks";
import addFileIMG from "../../assets/projet_add.jpg";
import styles from "./ProjetForm.scss";
import { updateProjet, AddProjet } from "../../lib/common";

function ProjetForm({ projet, validate }) {
  const navigate = useNavigate();
  const { register, watch, handleSubmit, reset } = useForm({
    defaultValues: useMemo(
      () => ({
        title: projet?.title,
        description: projet?.description,
        skills: projet?.skills,
        tags: projet?.tags,
      }),
      [projet]
    ),
  });

  useEffect(() => {
    reset(projet);
  }, [projet, reset]);
  const file = watch(["file"]);
  const [filePreview] = useFilePreview(file);

  const onSubmit = async (data) => {
    // When we create a new projet
    if (!projet) {
      if (!data.file[0]) {
        // eslint-disable-next-line no-alert
        alert("Vous devez ajouter une image");
      }

      const newProjet = await AddProjet(data);
      if (!newProjet.error) {
        validate(true);
      } else {
        // eslint-disable-next-line no-alert
        alert(newProjet.message);
      }
    } else {
      const updatedProjet = await updateProjet(data, data.id);
      if (!updatedProjet.error) {
        navigate("/");
      } else {
        // eslint-disable-next-line no-alert
        alert(updatedProjet.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
      <input type="hidden" id="id" {...register("id")} />
      <label htmlFor="title">
        <p>Titre du projet</p>
        <input type="text" id="title" {...register("title")} />
      </label>
      <label htmlFor="description">
        <p>Description</p>
        <input type="text" id="description" {...register("description")} />
      </label>
      <label htmlFor="skills">
        <p>Compétences</p>
        <input type="text" id="competences" {...register("competences")} />
      </label>
      <label htmlFor="tags">
        <p>Langages / outils</p>
        <input type="text" id="tags" {...register("tags")} />
      </label>

      <label htmlFor="file">
        <p>Visuel</p>
        <div className={styles.AddImage}>
          {filePreview || projet?.imageUrl ? (
            <>
              <img src={filePreview ?? projet?.imageUrl} alt="preview" />
              <p>Modifier</p>
            </>
          ) : (
            <>
              <img src={addFileIMG} alt="Add file" />
              <p>Ajouter une image</p>
            </>
          )}
        </div>
        <input {...register("file")} type="file" id="file" />
      </label>
      <button type="submit">Publier</button>
    </form>
  );
}

ProjetForm.propTypes = {
  projet: PropTypes.shape({
    id: PropTypes.string,
    _id: PropTypes.string,
    userId: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    skills: PropTypes.string,
    imageUrl: PropTypes.string,
    tags: PropTypes.string,
  }),
  validate: PropTypes.func,
};

ProjetForm.defaultProps = {
  projet: null,
  validate: null,
};
export default ProjetForm;
