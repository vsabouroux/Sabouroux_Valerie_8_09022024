const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  requiest: { type: String, required: true },

});

module.exports = mongoose.model("Contact", contactSchema);
