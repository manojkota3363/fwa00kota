var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("mydata", {
    title: "Manoj Kota",
    fact: "Iam just perfectly imperfect",
  });
});

module.exports = router;