const Project = require("../models/Project");
const fs = require("fs");
const path = require("path");

exports.createProject = (req, res, next) => {
  const projectObjet = JSON.parse(req.body.project);
  delete projectObjet._id;
  delete projectObjet._userId;
  const project = new Project({
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
exports.getAllProjects = (req, res, next) => {
  Project.find()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneProject = (req, res, next) => {
  Project.findOne({
    _id: req.params.id,
    // userId: req.auth.userId,
  })
    .then((project) => {
      if (!project) {
        return res.status(404).json({ message: "Projet non trouvé !" });
      }
      return res.status(200).json(project);
    })
    .catch((error) => {
      return res.status(400).json({ error });
    });
};

exports.modifyProject = (req, res, next) => {
  const projectObjet = req.file
    ? {
        ...JSON.parse(req.body.project),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  delete projectObjet._userId;

  Project.findById(req.params.id)
    .then((project) => {
      if (!project) {
        return res.status(404).json({ message: "Projet non trouvé !" });
      }
      // if (book.userId !== req.auth.userId) {
      //   res.status(401).json({ message: "Accès non authorisé !" });
      // } 
      else {
        if (req.file) {
          // Supprime l'image existante
          const imagePath = path.join(
            __dirname,
            "../images/",
            book.imageUrl.split("/images/")[1]
          );
          fs.unlink(imagePath, (err) => {
            if (err) {
              console.error(
                "Erreur lors de la suppression de l'image existante :",
                err
              );
            }
          });
        }

        Project.findByIdAndUpdate(
          { _id: req.params.id },
          { ...projectObjet, _id: req.params.id }
        )
          .then(() => {
            res.status(200).json({ message: "Projet modifié !" });
          })
          .catch((error) => res.status(500).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteProject = (req, res, next) => {
  Project.findOne({ _id: req.params.id })
    .then((project) => {
      if (!project) {
        return res.status(404).json({ message: "Projet non trouvé !" });
      }
      // if (book.userId !== req.auth.userId) {
      //   return res.status(401).json({ message: "Accès non autorisé !" });
      // } 
      else {
        const filename = project.imageUrl.split("images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Project.deleteOne({ _id: req.params.id })
            .then(() => {
              res.status(200).json({ message: "Projet supprimé !" });
            })
            .catch((error) => {
              res.status(500).json({ error });
            });
        });
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};