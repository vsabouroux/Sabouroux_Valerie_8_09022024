const jwt = require("jsonwebtoken");

//dans le cas de mon site il faut autoriser la création du propriétaire sans vérification d'authentification
// il faut donc exclure la vérif d'authentification pour la route de création du proprio
module.exports = (req, res, next) => {
  try {
    if (req.path === '/api/auth/createOwner' && req.method === 'POST') {
      // Si la demande concerne la création du propriétaire, on passe à la prochaine middleware
      return next();
    }
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    req.auth = {
      userId: userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
};

// module.exports = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
//     const userId = decodedToken.userId;
//     req.auth = {
//       userId: userId,
//     };
//     next();
//   } catch (error) {
//     res.status(401).json({ error });
//   }
// };
