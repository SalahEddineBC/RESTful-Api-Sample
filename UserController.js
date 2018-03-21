var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require("./user");
router.post("/", function(req, res) {
  //check
  if (!check(req.body)) return res.status(500).send("ERROR");
  else {
    User.create(
      {
        nom: req.body.name,
        prenom: req.body.prenom,
        password: req.body.password,
        email:req.body.email,
        role:req.body.role
      },
      function(err, user) {
        if (err) return res.status(500).send("There is an error");
        res.status(200).send(user);
      }
    );
  }
});
router.get("/", function(req, res) {
  User.find({}, function(err, users) {
    if (err)
      return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(users);
  });
});
function check(obj) {
  /*
  var nom= obj.nom;
  var email = obj.email;
  var prenom = onj.prenom;
  var mdp = obj.password;
  var r = obj.role;
  var regex = "[a-zA-Z]{3,40}( [a-zA-Z]{3,40}){0,2}";
  var reg = new RegExp(regex);
  if (typeof name != undefined) {
    if (name.match(reg) == null) return false;
  }
  else return false;
  if(typeof(email)!=undefined)
  {

  }*/
  return false;
}
module.exports = router;
