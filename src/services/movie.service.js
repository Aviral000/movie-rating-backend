const Movie = require("../models/movie.model");
const mongoose = require('mongoose');

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

const updatedMovie = async (params, data) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            params.id,
            data,
            { new: true }
        );
        return updatedMovie;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = { addMovie, updatedMovie }