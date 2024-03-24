const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique:true },
  password: { type: String, required: true },
});

// Avant de sauvegarder l'utilisateur, hash le mot de passe
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});
// userSchema.plugin(uniqueValidator);



module.exports = mongoose.model("User", userSchema);
