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
import UpdateProjet from "./views/UpdateProjet/UpdateProjet";
import { useUser } from "./lib/customHooks";

import Projets from "./datas/Projets";

function App() {
  const [user, setUser] = useState(null);
  const { connectedUser } = useUser();

  useEffect(() => {
    setUser(connectedUser);
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
          <Route path={APP_ROUTES.HOME} element={<Home projets={Projets} />} />
          <Route
            path="FicheProjet/:id"
            element={<FicheProjet projets={Projets} />}
          />
          <Route path={APP_ROUTES.UPDATE_PROJET} element={<UpdateProjet />} />
          <Route path={APP_ROUTES.ADD_PROJET} element={<AddProjet />} />
          <Route path={APP_ROUTES.APROPOS} element={<APropos />} />
          <Route path={APP_ROUTES.CONTACT} element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
