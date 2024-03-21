const express = require("express");
const bodyParser = require("body-parser");
//"body-parser" est un middleware populaire pour Express.js qui permet de lire les données envoyées par le client
//(par exemple, les données d'un formulaire POST) à partir du corps de la requête HTTP.
//Sans "body-parser", Express ne serait pas capable de lire ces données par défaut
const projectsRoutes = require("./routes/projects");
const userRoutes = require("./routes/user");
const path = require("path");

const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://sabourouxvalerie:DFcWeb4moOAgCObE@cluster0.ivhsztv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.use("/api/projects", projectsRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res) => {
  res.json({ message: "Votre requête a bien été reçue test portolio !" });
});

module.exports = app;
