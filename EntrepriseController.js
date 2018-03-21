var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Entreprise = require("./Entreprise");
router.post("/", function(req, res) {
  Entreprise.create(
    {
      nom: req.body.name,
      logo: req.body.logo,
    },
    function(err, user) {
      if (err) return res.status(500).send("There is an error");
      res.status(200).send(user);
    }
  );
});
router.get("/", function(req, res) {
  Entreprise.find({}, function(err, users) {
    if (err)
      return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(users);
  });
});


router.get('/nom/:nom',function (req,res) {
  Entreprise.find({nom:req.params.nom}, function(err, users) {
    if (err) return res
        .status(500)
        .send("There was a problem finding the users.");
    res.status(200).send(users);
  });
})

function check(obj) {
  var name = obj.name;
  var email = obj.email;
  var regex = "[a-zA-Z]{3,40}( [a-zA-Z]{3,40}){0,2}";
  var reg = new RegExp(regex);
  if (typeof name != undefined && typeof email != undefined) {
    if (name.match(reg) != null) console.log("meto");
  }
  return false;
}




module.exports = router;
