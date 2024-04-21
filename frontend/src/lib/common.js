import axios from 'axios';
import { API_ROUTES } from '../utils/constants';

function formatProjets(projetArray) {
  return projetArray.map((projet) => {
    const newProjet = { ...projet };
    // eslint-disable-next-line no-underscore-dangle
    newProjet.id = newProjet._id;
    return newProjet;
  });
}

export function storeInLocalStorage(token, userId) {
  localStorage.setItem('token', token);
  localStorage.setItem('userId', userId);
}

export function getFromLocalStorage(item) {
  return localStorage.getItem(item);
}

export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null };
  try {
    const token = getFromLocalStorage('token');
    const userId = getFromLocalStorage('userId');
    if (!token) {
      return defaultReturnObject;
    }
    return { authenticated: true, user: { userId, token } };
  } catch (err) {
    console.error('getAuthenticatedUser, Something Went Wrong', err);
    return defaultReturnObject;
  }
}

export async function getProjets() {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_ROUTES.PROJETS}`,
    });
    // eslint-disable-next-line array-callback-return
    const projets = formatProjets(response.data);
    return projets;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getProjet(id) {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_ROUTES.PROJETS}/${id}`,
    });
    console.log("Données récupérées du projet :", response.data);
    const projet = response.data;
    // eslint-disable-next-line no-underscore-dangle
    projet.id = projet._id;
    return projet;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function deleteProjet(id) {
  try {
    await axios.delete(`${API_ROUTES.PROJETS}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
//utilisation du hook useEffect pour indiquer à React que le composant doit exécuter quelque chose après chaque affichage
//ici il s'agit de ne pas avoir besoin de recharger la page lorsque l'ui ajoute, modifie ou supprime un projet
export async function addProjet(data) {
  const userId = localStorage.getItem('userId');
  const projet = {
    userId,
    title: data.title,
    description: data.description,
    skills: data.skills,
    tags: data.tags,
    githubUrl: data.githubUrl,
  };
  const bodyFormData = new FormData();
  bodyFormData.append('projet', JSON.stringify(projet));
  bodyFormData.append('image', data.file[0]);

  try {
    return await axios({
      method: 'post',
      url: `${API_ROUTES.PROJETS}`,
      data: bodyFormData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  } catch (err) {
    console.error(err);
    return { error: true, message: err.message };
  }
}

export async function updateProjet(data, id) {
  const userId = localStorage.getItem('userId');

  let newData;
  const projet = {
    userId,
    title: data.title,
    description: data.description,
    skills: data.skills,
    tags: data.tags,
    githubUrl: data.githubUrl,
  };
  console.log("Données envoyées pour la mise à jour du projet :", projet);
  console.log(data.file[0],id);
  if (data.file[0]) {
    newData = new FormData();
    newData.append('projet', JSON.stringify(projet));
    newData.append('image', data.file[0]);
  } else {
    newData = { ...projet };
  }
//const newProjet = await axios
// const response = await axios({
  // return response.data;
  try {
    const newProjet = await axios({
      method: 'put',
      url: `${API_ROUTES.PROJETS}/${id}`,
      data: newData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  return newProjet;
  } catch (err) {
    console.error(err);
    return { error: true, message: err.message };
  }
}
