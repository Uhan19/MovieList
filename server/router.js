var express = require("express");
var router = express.Router();

router.get("/movies", function(req, res) {
  res.send("get from server");
});

router.post("/movies", function(req, res) {
  res.send("post from server");
});

module.exports = router;
