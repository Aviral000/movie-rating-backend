const Movie = require("../models/movie.model");

const addMovie = async (data) => {
    try {
        const movie = await Movie.create({
            title: data.title,
            director: data.director,
            genre: data.genre,
            releaseYear: data.releaseYear,
            description: data.description
        });
        
        return movie;
    } catch (error) {
        throw new error('Error creating movie');
    }
}

const updatedMovie = async (id, data) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(id, data, { new: true });
        return updatedMovie;
    } catch (error) {
        throw new error('Error updating movie');
    }
}

module.exports = { addMovie, updatedMovie }