var mongoose = require("mongoose");
var Etudiant = new mongoose.Schema({
  Nom: String,
  Prenom: String,
  Email: String,
  Telephone: String,
  Etablissement: String,
  anneeEtude: String,
  Specialité: String,
  Adress: String
});
mongoose.model("Etudiant", Etudiant);
module.exports = mongoose.model("Etudiant");
