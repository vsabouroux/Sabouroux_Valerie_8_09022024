/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useFilePreview } from "../../lib/customHooks";
import addFileIMG from "../../assets/add_file.png";
import styles from "./ProjetForm.scss";
import { updateProjet, addProjet } from "../../lib/common";
function ProjetForm({ projet, validate }) {
 
  const navigate = useNavigate();
  const { register, watch, handleSubmit, reset } = useForm({
    defaultValues: useMemo(
      () => ({
        // id:projet?.id,
        title: projet?.title,
        description: projet?.description,
        skills: projet?.skills,
        tags: projet?.tags,
        imageUrl:projet?.imageUrl,
      }),
      [projet]
    ),
  });
  
  useEffect(() => {
    reset(projet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projet]);
  const file = watch(["file"]);
  const [filePreview] = useFilePreview(file);

  const onSubmit = async (data) => {
    // vérifie si un fichier a été sélectionné dans le champ d'entrée "fichier"
    //|| opérateur "ou". Si l'une de ces conditions est vraie, cela signifie que l'utilisateur n'a pas fourni de nouveau fichier image
    if (!data.file || !data.file[0]) {
      delete data.file;
      data.imageUrl = projet.imageUrl; // Permet de conserver l'URL de l'image existante lors de la mise à jour du projet
    }
    // Quand on crée un nouveau projet
    if (!projet) {
      if (!data.file[0]) {
        // eslint-disable-next-line no-alert
        alert("Vous devez ajouter une image");
        return; 
      }
      const newProjet = await addProjet(data);
      if (!newProjet.error) {
        validate(true);
      } else {
        // eslint-disable-next-line no-alert
        alert(newProjet.message);
      }
    } else {
       // If no new file is provided, keep the existing image
    if (!data.file) {
      delete data.file; // Remove file from data
      data.file = projet.imageUrl; // Add existing image URL to data
    }
      console.log(data);
      const updatedProjet = await updateProjet(data, data.id);
      if (!updatedProjet.error) {
        validate(true);
        navigate("/");
      } else {
        console.log(data);
        // eslint-disable-next-line no-alert
        alert(updatedProjet.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
      <input type="hidden" id="id" {...register("id")} />
      <label htmlFor="title">
        <p>Titre du projet *</p>
        <input
          type="text"
          id="title"
          {...register("title")}
          placeholder="Titre du projet"
     
        />
      </label>
      <label htmlFor="description">
        <p>Description *</p>
        <textarea
          type="text"
      
          id="description"
          {...register("description")}
          placeholder="Description du projet"
        />
      </label>
      <label htmlFor="skills">
        <p>Compétences * compétence1, compétence2, ...</p>
        <textarea
          type="text"
          id="skills"
          {...register("skills")}
          placeholder="Les compétences mises en oeuvre pour ce projet"
        />
      </label>
      <label htmlFor="tags">
        <p>Langages / Outils * langage1, outil1, ...</p>
        <textarea
          type="text"
          id="tags"
          {...register("tags")}
          placeholder="Les langages et outils principaux mobilisés sur ce projet"
        />
      </label>
      <label htmlFor="githubUrl">
        <p>Lien GitHub</p>
        <input type="text" id="githubUrl" {...register("githubUrl")} />
      </label>
      <label htmlFor="file">
        <p>Visuel *</p>
        <div className={styles.AddImage}>
          {/* Display file preview if file is provided or if it's an existing project */}
          {(filePreview || projet?.imageUrl) && (
            <>
              <img src={filePreview ?? projet?.imageUrl} alt="preview" />
              <p>Modifier</p>
            </>
          )}
          {/* Display add file image if it's a new project or if the file is not provided */}
          {!projet && !filePreview && (
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
    skills: PropTypes.array,
    imageUrl: PropTypes.string,
    tags: PropTypes.array,
  }),
  validate: PropTypes.func,
};

ProjetForm.defaultProps = {
  projet: null,
  validate: null,
};
export default ProjetForm;


