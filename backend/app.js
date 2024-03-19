const express = require("express");

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
const app = express();

app.use((req, res) => {
  res.json({ message: "Votre requête a bien été reçue test portolio !" });
});

module.exports = app;
