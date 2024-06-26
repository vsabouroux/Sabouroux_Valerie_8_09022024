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
