// const API_URL = `http://localhost:4000`;
const API_URL = `https://vs-portfolio-api-0c0adab5969b.herokuapp.com/`;

export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,// URL pointant vers la route de connexion authentifiée
  PROJETS: `${API_URL}/api/projects`,
  CONTACT: `${API_URL}/api/contact`,
};


export const APP_ROUTES = {
  SIGN_UP: "/Inscription",
  SIGN_IN: "/Connexion",
  HOME: "/",
  // NOMATCH: "/NoMatch",
  APROPOS: "/Apropos",
  CONTACT: "/Contact",
  ADD_PROJET: "/Ajouter",
  PROJET: "/FicheProjet/:id",//projets remplacé par "FicheProjet" 
  UPDATE_PROJET: "/projet/modifier/:id",
};

