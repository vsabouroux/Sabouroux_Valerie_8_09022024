const mongoose = require('mongoose');

const projetSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  year: { type: Number, required: true },
});

module.exports = mongoose.model('Projet', projetSchema);