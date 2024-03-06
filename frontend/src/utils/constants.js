const API_URL = 'http://localhost:4000';
export const API_ROUTES = {
  SIGN_IN: `${API_URL}/api/auth/login`,
  PROJETS: `${API_URL}/api/projets`,
};

export const APP_ROUTES = {
  SIGN_IN: '/Connexion',
  ADD_PROJET: '/Ajouter',
  PROJET: '/projet/:id',
  UPDATE_PROJET: 'projet/modifier/:id',
};
