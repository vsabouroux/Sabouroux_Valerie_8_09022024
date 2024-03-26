const API_URL = "http://localhost:4000";
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/auth/createOwner`,
  SIGN_IN: `${API_URL}/api/login`,
  PROJETS: `${API_URL}/api/projects`,
};
// SIGN_IN: `${API_URL}/api/auth/login`, auth à supprimer car dans cette app pas besoin de vérifier si l'ui est le bon car un seul qui a été sécurisé lors de son inscription
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
