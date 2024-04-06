const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};
const storage = multer.diskStorage({
  destination :(req, file, callback) => {
      callback(null, "images") //callback = null pour dire qu'il n'y a pas eu d'erreur
  },
  filename : (req, file, callback) => {
      const name = file.originalname.split(" ").join("_");
      const extension = MIME_TYPES[file.mimetype];
      callback(null, name + Date.now() + "." + extension);
  }
});
module.exports = multer ({storage}).single("image");
// // Configuration pour l'image générale
// const generalImageStorage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "general-images");
//   },
//   filename: (req, file, callback) => {
//     const name = file.originalname.split(" ").join("_");
//     const extension = MIME_TYPES[file.mimetype];
//     callback(null, name + Date.now() + "." + extension);
//   },
// });
// const generalImageUpload = multer({ storage: generalImageStorage }).single("generalImage");

// // Configuration pour les images du carrousel
// const carouselImageStorage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "carousel-images");
//   },
//   filename: (req, file, callback) => {
//     const name = file.originalname.split(" ").join("_");
//     const extension = MIME_TYPES[file.mimetype];
//     callback(null, name + Date.now() + "." + extension);
//   },
// });
// const carouselImageUpload = multer({ storage: carouselImageStorage }).array("carouselImages", 4);

// module.exports = { generalImageUpload, carouselImageUpload };
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "images"); //callback = null pour dire qu'il n'y a pas eu d'erreur
//   },
//   filename: (req, file, callback) => {
//     const name = file.originalname.split(" ").join("_");
//     const extension = MIME_TYPES[file.mimetype];
//     callback(null, name + Date.now() + "." + extension);
//   },
// });
// // Utilisation de multer.array() pour télécharger plusieurs fichiers
// module.exports = multer({ storage }).array("images", 4); // "images" est le nom du champ pour les fichiers
// // module.exports = multer({ storage }).single("image");
