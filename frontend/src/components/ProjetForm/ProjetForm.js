/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import * as PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useFilePreview } from '../../lib/customHooks';
import addFileIMG from '../../assets/add_file.png';
import styles from './ProjetForm.scss';
import { updateProjet, addProjet } from '../../lib/common';

function ProjetForm({ projet, validate }) {
  const navigate = useNavigate();
  const {
    register, watch, handleSubmit, reset,
  } = useForm({
    defaultValues: useMemo(() => ({
      title: projet?.title,
      description: projet?.description,
      skills: projet?.skills,
      tags: projet?.tags,
    }), [projet]),
  });
  useEffect(() => {
    reset(projet);
    // eslint-disable-next-line
  }, [projet]);
  const file = watch(['file']);
  const [filePreview] = useFilePreview(file);

  const onSubmit = async (data) => {
    // When we create a new book
    if (!projet) {
      if (!data.file[0]) {
        // eslint-disable-next-line no-alert
        alert('Vous devez ajouter une image');
      }
     
      const newProjet = await addProjet(data);
      if (!newProjet.error) {
        validate(true);
      } else {
        // eslint-disable-next-line no-alert
        alert(newProjet.message);
      }
    } else {
      const updatedProjet = await updateProjet(data, data.id);
      if (!updatedProjet.error) {
        navigate('/');
      } else {
        // eslint-disable-next-line no-alert
        alert(updatedProjet.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
      <input type="hidden" id="id" {...register('id')} />
      <label htmlFor="title">
        <p>Titre du projet</p>
        <input type="text" id="title" {...register('title')} />
      </label>
      <label htmlFor="description">
        <p>Description</p>
        <input type="text" id="author" {...register('description')} />
      </label>
      <label htmlFor="skills">
        <p>Compétences</p>
        <input type="text" id="skills" {...register('skills')} />
      </label>
      <label htmlFor="tags">
        <p>Langages / Outils</p>
        <input type="text" id="tags" {...register('tags')} />
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
        <input {...register('file')} type="file" id="file" />
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
    skills: PropTypes.number,
    imageUrl: PropTypes.string,
    tags: PropTypes.string,
  }),
  validate: PropTypes.func,
};

ProjetForm.defaultProps = {
  book: null,
  validate: null,
};
export default ProjetForm;



// import React, { useState } from 'react';

// const ProjetForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     skills: '',
//     tags: '',
//     generalImage: '',
//     carouselImages: [],
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (event) => {
//     const { name, files } = event.target;
//     setFormData({ ...formData, [name]: files });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form  onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="title">Titre :</label>
//         <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} required />
//       </div>
//       <div>
//         <label htmlFor="description">Description :</label>
//         <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} required />
//       </div>
//       <div>
//         <label htmlFor="skills">Compétences :</label>
//         <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleInputChange} required />
//       </div>
//       <div>
//         <label htmlFor="tags">Langages / Outils :</label>
//         <input type="text" id="tags" name="tags" value={formData.tags} onChange={handleInputChange} required />
//       </div>
//       <div>
//         <label htmlFor="generalImage">Image générale :</label>
//         <input type="file" id="generalImage" name="generalImage" value={formData.generalImage} onChange={handleFileChange} required />
//       </div>
//       <div>
//         <label htmlFor="carouselImages">Images (au maximum 4) :</label>
//         <input type="file" id="images" name="carouselImages" multiple onChange={handleFileChange} required />
//       </div>
//       <button type="submit">Ajouter Projet</button>
//     </form>
//   );
// };

// export default ProjetForm;