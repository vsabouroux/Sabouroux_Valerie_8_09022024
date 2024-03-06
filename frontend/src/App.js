import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import NoMatch from "./views/NoMatch/NoMatch";
import APropos from "./views/APropos/APropos";
import Contact from "./views/Contact/Contact";
import SignIn from "./views/SignIn/SignIn";
import FicheProjet from "./views/FicheProjet/FicheProjet";
import Projets from "./datas/Projets";
import { useUser } from "./lib/customHooks";

function App() {
  const [user, setUser] = useState(null);
  const { connectedUser } = useUser();

  useEffect(() => {
    setUser(connectedUser);
  }, [connectedUser]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home projets={Projets} />} />
          <Route
            path="/SignIn"
            element={<SignIn user={user} setUser={setUser} />}
          />
          <Route path="/APropos" element={<APropos />} />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="FicheProjet/:id"
            element={<FicheProjet projets={Projets} />}
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
