const API_URL = `http://localhost:4000`;
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,// URL pointant vers la route de connexion authentifiée
  PROJETS: `${API_URL}/api/projects`,
};

export const APP_ROUTES = {
  SIGN_UP: "/Inscription",
  SIGN_IN: "/Connexion",
  HOME: "/",
  // NOMATCH: "/NoMatch",
  APROPOS: "/Apropos",
  CONTACT: "/Contact",
  ADD_PROJET: "/Ajouter",
  PROJET: "/Projet/:id",
  UPDATE_PROJET: "projet/modifier/:id",
};
