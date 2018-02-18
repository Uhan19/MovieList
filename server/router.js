var express = require("express");
var router = express.Router();

var movies = [
    { title: "Mean Girls", description: "Most quoted movie of all time!" },
    { title: "Hackers", description: "A Hack Reactor documentary" },
    { title: "The Grey", description: "Liam Neeson fights a wolf" },
    { title: "Sunshine", description: "Something SF is missing" },
    {
      title: "Ex Machina",
      description: "Would rewatch this movie in a heartbeat"
    }
  ];

router.get("/movies", function(req, res) {
  res.send(movies);
});

router.post("/movies", function(req, res) {
  res.send("post from server");
});

module.exports = router;
