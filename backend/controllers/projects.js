const fs = require("fs");
const path = require("path");
const Project = require("../models/Project");

exports.createProject = (req, res, next) => {
  let projectObjet = JSON.parse(req.body.projet);//project changé en "projet" parceque c'est comme ça que cela s'appelle dans le frontend !!!

 projectObjet.tags = projectObjet.tags.split(","); // "split" pour diviser la chaîne de caractères en tableau
 projectObjet.skills = projectObjet.skills.split(",");
 console.log(projectObjet);

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
  Project.findById(req.params.id)
  .then((projet) => {
    if (!projet) {
      return res.status(404).json({ message: "Projet non trouvé !" });
    }
    if (project.userId !== req.auth.userId) {
      res.status(401).json({ message: "Accès non autorisé !" });
    } else {
      let projectObjet = JSON.parse(req.body.projet); // Utilisez les données envoyées depuis le frontend

      // Vérifiez si les compétences sont envoyées en tant que chaîne de caractères
      if (typeof projectObjet.skills === 'string') {
        projectObjet.skills = projectObjet.skills.split(","); // Convertissez en tableau si nécessaire
      }

      // Mettez à jour le projet avec les nouvelles données
      Project.findByIdAndUpdate(
        req.params.id,
        { ...projet, ...projectObjet },
        { new: true } // Assurez-vous de renvoyer le projet mis à jour
      )
        .then((updatedProject) => {
          res.status(200).json({ message: "Projet modifié !", projet: updatedProject });
        })
        .catch((error) => res.status(500).json({ error }));
    }
  })
  .catch((error) => {
    res.status(400).json({ error });
  });
};
//   const projectObjet = req.file
//     ? {
//         ...JSON.parse(req.body.projet),//project changé en "projet" parceque c'est comme ça que cela s'appelle dans le frontend !!!
//         imageUrl: `${req.protocol}://${req.get("host")}/images/${
//           req.file.filename
//         }`,
//       }
//     : { ...req.body };
//   delete projectObjet._userId;

//   Project.findById(req.params.id)
//     .then((project) => {//project transformé en projet
//       if (!project) {
//         return res.status(404).json({ message: "Projet non trouvé !" });
//       }
//       if (project.userId !== req.auth.userId) {
//         res.status(401).json({ message: "Accès non autorisé !" });
//       } else {
//         if (req.file) {
//           // Supprime l'image existante
//           const imagePath = path.join(
//             __dirname,
//             "../images/",
//             book.imageUrl.split("/images/")[1]
//           );
//           fs.unlink(imagePath, (err) => {
//             if (err) {
//               console.error(
//                 "Erreur lors de la suppression de l'image existante :",
//                 err
//               );
//             }
//           });
//         }

//         Project.findByIdAndUpdate(
//           { _id: req.params.id },
//           { ...projectObjet, _id: req.params.id }
//         )
//           .then(() => {
//             res.status(200).json({ message: "Projet modifié !" });
//           })
//           .catch((error) => res.status(500).json({ error }));
//       }
//     })
//     .catch((error) => {
//       res.status(400).json({ error });
//     });
// };

exports.deleteProject = (req, res, next) => {
  Project.findOne({ _id: req.params.id })
    .then((project) => {
      if (!project) {
        return res.status(404).json({ message: "Projet non trouvé !" });
      }
      if (project.userId !== req.auth.userId) {
        return res.status(401).json({ message: "Accès non autorisé !" });
      } else {
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

