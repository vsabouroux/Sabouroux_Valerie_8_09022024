const Porjct = require("../models/Project");
const fs = require("fs");
const path = require("path");

exports.createProject = (req, res, next) => {
  const projectObjet = JSON.parse(req.body.project);
  delete projectObjet._id;
  delete projectObjet._userId;
  const book = new Project({
    ...projectObjet,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  project
    .save()
    .then(() => {
      res.status(201).json({
        message: "Projet créé !",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
