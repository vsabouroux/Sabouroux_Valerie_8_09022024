//installation du package bcrypt pour hacher le password
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Création de l'utilisateur propriétaire 
exports.createOwner = async (req, res, next) => {
  try {
    const existingOwner = await User.findOne({ email: req.body.email });
    if (existingOwner) {
      return res.status(400).json({ message: "L'utilisateur propriétaire existe déjà." });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const owner = new User({
      email: req.body.email,
      password: hashedPassword
    });
    await owner.save();
    res.status(201).json({ message: "Utilisateur propriétaire créé avec succès." });
  } catch (error) {
    next(error);
  }
};

// Connexion de l'utilisateur (propriétaire ou non de l'application)
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "L'adresse e-mail ou le mot de passe est incorrect." });
    }
    //On compare le mot de passe fourni avec le mot de passe haché dans la base de données
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "L'adresse e-mail ou le mot de passe est incorrect." });
    }
    // On génère un jeton d'authentification valide
    const token = jwt.sign({ userId: user._id}, "RANDOM_TOKEN_SECRET", { expiresIn: '24h' });
 
    res.status(200).json({userId: user._id, token});
  } catch (error) {
    next(error);
  }
}
   //process.env.JWT_SECRET
//En définitive ici dans cette app seul le propriétaire va pouvoir s'inscrire et ce une seule fois.
// exports.signup = (req, res, next) => {
//   bcrypt
//     .hash(req.body.password, 10)
//     .then((hash) => {
//       const user = new User({
//         email: req.body.email,
//         password: hash,
//       });
//       user
//         .save()
//         .then(() => res.status(201).json({ message: "Utlisateur créé !" }))
//         .catch((error) => res.status(400).json({ error }));
//     })
//     .catch((error) => res.status(500).json({ error }));
// };


// exports.login = (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     // On vérifie si l'utilisateur est le propriétaire de l'application
//     if (email !== "email_du_proprietaire" || password !== "mot_de_passe_du_proprietaire") {
//       return res.status(401).json({ message: "Vous n'êtes pas autorisé à accéder à cette application." });
//     }
//     // Si l'utilisateur est le propriétaire, génère un token d'authentification
//     const token = jwt.sign({ userId: "id_du_proprietaire" }, "RANDOM_TOKEN_SECRET" , { expiresIn: "24h" });
//     //process.env.JWT_SECRET
//     // Retourne le token au frontend
//     res.status(200).json({ userId: "id_du_proprietaire", token: token });
//   } catch (error) {
//     next(error);
//   }
// };

//exports.login = (req, res, next) => {cette fonction permet de vérifier si un utilisateur existe ds BDD et si le mdp tranmis par le client correspond à cet utilisateur
//On met en stanby car pour l'instant seul le propriétaire de l'app est autorisé
//   User.findOne({ email: req.body.email })
//     .then((user) => {
//       if (!user) {
//         return res
//           .status(401)
//           .json({ message: "Utilisateur et/ou mot de passe incorrects" });
//       }
//       bcrypt
//         .compare(req.body.password, user.password)
//         .then((valid) => {
//           if (!valid) {
//             return res
//               .status(401)
//               .json({ message: "Utilisateur et/ou mot de passe incorrects" });
//           }
//           res.status(200).json({
//             userId: user._id,
//             token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
//               expiresIn: "24h",
//             }),
//           });
//         })
//         .catch((error) => res.status(500).json({ error }));
//     })
//     .catch((error) => res.status(500).json({ error })); //erreur serveur et non qd pas de champ pas rempli
// };
