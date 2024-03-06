import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import NoMatch from "./views/NoMatch/NoMatch";
import Home from "./views/Home/Home";
import APropos from "./views/APropos/APropos";
import Contact from "./views/Contact/Contact";
import FicheProjet from "./views/FicheProjet/FicheProjet";
import Projets from "./datas/Projets";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home projets={Projets} />} />
        <Route path="APropos" element={<APropos />} />
        <Route path="Contact" element={<Contact />} />
        <Route
          path="FicheProjet/:id"
          element={<FicheProjet projets={Projets} />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
