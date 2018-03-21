var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Etudiant = require("./Etudiant");
router.post("/", function(req, res) {
  Etudiant.create(
    {
      Nom: req.body.nom,
      Prenom: req.body.prenom,
      Email: req.body.email,
      Telephone: req.body.tel,
      Etablissement: req.body.etablissement,
      anneeEtude: req.body.annee,
      Specialité: req.body.spec,
      Adress: req.body.adress
    },
    function(err, user) {
      if (err) return res.status(500).send("There is an error");
      res.status(200).send(user);
    }
  );
});
router.get("/", function(req, res) {
  Etudiant.find({}, function(err, users) {
    if (err)
      return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(users);
  });
});

router.get("/nom/:nom", function(req, res) {
  Etudiant.find({ nom: req.params.nom }, function(err, users) {
    if (err)
      return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(users);
  });
});
module.exports = router;
