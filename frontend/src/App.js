import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./views/SignIn/SignIn";
import Home from "./views/Home/Home";
import FicheProjet from "./views/FicheProjet/FicheProjet";
import { APP_ROUTES } from "./utils/constants";
import Header from "./components/Header/Header";
import NoMatch from "./views/NoMatch/NoMatch";
import APropos from "./views/APropos/APropos";
import Contact from "./views/Contact/Contact";
import AddProjet from "./views/AddProjet/AddProjet";
import Footer from "./components/Footer/Footer";
// import UpdateProjet from "./views/UpdateProjet/UpdateProjet";
import { useUser } from "./lib/customHooks";
import { getProjets } from "./lib/common";
import UpdateProjet from "./views/UpdateProjet/UpdateProjet";


function App() {
  const [user, setUser] = useState(null);
  const { connectedUser } = useUser();
  const [projets, setProjets] = useState([]);
  const isAuthenticated = !!user;

  useEffect(() => {
    setUser(connectedUser);
    getProjets() // Appel à la fonction pour récupérer les projets
      .then((formData) => setProjets(formData))
      .catch((error) => console.error("Error fetching projets:", error));
  }, [connectedUser]);

  return (
    <Router>
      <div>
        <Header user={user} setUser={setUser} />
        <Routes>
  
          <Route
            path={APP_ROUTES.SIGN_IN}
            element={<SignIn setUser={setUser} />}
          />
          <Route path={APP_ROUTES.HOME} element={<Home projets={projets} isAuthenticated={isAuthenticated}/>} />
          <Route path={APP_ROUTES.APROPOS} element={<APropos />} />
          <Route path="/FicheProjet/:id" element={<FicheProjet projets={projets} />} />
          <Route path={APP_ROUTES.ADD_PROJET} element={<AddProjet />} />
          <Route path={APP_ROUTES.UPDATE_PROJET} element={<UpdateProjet />} />
          <Route path={APP_ROUTES.CONTACT} element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}
export default App;
