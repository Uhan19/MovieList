var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movielistapp');
var uniqueValidator = require('mongoose-unique-validator');


var Schema = mongoose.Schema;

let movieSchema = {
    title: String, 
    vote_average: Number, 
    overview: String,
    id: {type: Number, required: true, unique: true}
};

// movieSchema.plugin(uniqueValidator)

var Movie = mongoose.model('Movie', movieSchema);


module.exports.Movie = Movie