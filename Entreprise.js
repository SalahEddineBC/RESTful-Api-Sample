var mongoose = require("mongoose");
var t = new mongoose.Schema({
  activité: String
});
var Personne = new mongoose.Schema({
  
    nom: String,
    prenom: String,
    mail: String,
    telephone: String,
    fonction: String
  
});
var Entreprise = new mongoose.Schema({
  nom: String,
  logo: String,
  domaine: String,
  activités: [t],
  statutCommercial: String,
  statutJuridique: String,
  anneeDeCréation: { type: Date },
  adresse: String,
  siteweb: String,
  présentationDeLEntreprise: String,
  contact: [Personne]
});
mongoose.model('Entreprise', Entreprise);
module.exports = mongoose.model("Entreprise");
