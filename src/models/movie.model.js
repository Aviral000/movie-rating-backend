const mongoose = require("mongoose");
const validator = require("validator");

const allowedGenres = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi'];

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    director: {
        type: String,
        minlength: [2, "Director name should be at least 2 characters long"],
        required: true
    },
    genre: {
        type: [String],
        validate: {
            validator: function(value) {
                return value.every(genre => allowedGenres.includes(genre));
            },
            message: 'Genre must be one of the predefined genres: ' + allowedGenres.join(', ')
        },
    },
    releaseYear: {
        type: String,
        default: new Date().getFullYear().toString()
    },
    description: {
        type: String,
        minlength: [15, "Description should be at least 15 characters long"]
    }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;