const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movielistapp');


const Schema = mongoose.Schema;

const movieSchema = {
    title: String, 
    vote_average: Number, 
    overview: String
}
const Movie = mongoose.model('Movie', movieSchema);


module.exports.Movie = Movie