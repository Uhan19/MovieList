var express = require("express");
var request = require('request')
var router = express.Router();
var movieapi = require("./../lib/movieAPI.js");
var rp = require("request-promise");
var Movie = require('./../database/index.js');

router.get("/movies", function(req, res) {
  res.send(movies);
});

//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

router.get("/load", function(req, res) {
  options = {
    url: `https://api.themoviedb.org/3/search/movie?api_key=${movieapi.TOKEN}&query=Jack+Reacher`,
    headers: {
      "user-agent": "Request"
    }
  };
  rp(options)
    .then(results => {
      var storage = {}
      var movieData = JSON.parse(results);
      console.log('inside the rp!')
      storage.title = movieData.results[0].title; 
      storage.vote_average = movieData.results[0].vote_average
      storage.overview = movieData.results[0].overview
      storage.id = movieData.results[0].id
      var movie = new Movie.Movie(storage)
      movie.save(function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log('saved!')
        }
        
      })
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/movies', function(req, res) {
  res.send(movies)
})

router.post("/movie", function(req, res) {
  movies.push(req.body);
  res.send("post from server");
});

module.exports = router;
