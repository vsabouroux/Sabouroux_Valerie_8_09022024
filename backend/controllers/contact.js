const Contact = require("../models/Contact");

exports.submitContactForm = async (req, res) => {
  try {
    const { firstName, lastName, email, request } = req.body;
    console.log(body);
    // Créer une nouvelle entrée dans la base de données
    const newContact = new Contact({ firstName, lastName, email, request });
    await newContact.save();
    res.status(201).json({ message: "Données enregistrées avec succès" });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement des données du formulaire de contact:", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de l'enregistrement des données du formulaire de contact" });
  }
};