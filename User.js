var mongoose = require('mongoose');
var User = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    motDePasse: String,
    role: String
});
mongoose.model('User', User);

module.exports = mongoose.model('User');
