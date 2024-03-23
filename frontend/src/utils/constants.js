const API_URL = "http://localhost:4000";
export const API_ROUTES = {
  SIGN_IN: `${API_URL}/api/auth/login`,
  PROJETS: `${API_URL}/api/projects`,
};

export const APP_ROUTES = {
  SIGN_IN: "/SignIn",
  HOME: "/",
  // NOMATCH: "/NoMatch",
  APROPOS: "/Apropos",
  CONTACT: "/Contact",
  ADD_PROJET: "/Ajouter",
  // PROJET: "/Projet/:id",
  UPDATE_PROJET: "projet/modifier/:id",
};
