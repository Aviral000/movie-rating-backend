const { addMovie, updatedMovie, movieFromId, allMovies } = require("../services/movie.service");

const addNewMovie = async(req, res) => {
    try {
        const movie = await addMovie(req.body);
        return res.status(201).json(movie);
    } catch (error) {
        return res.status(400).json({ message: "invalid data or request", error: error.message })
    }
}

const updaterMovie = async (req, res) => {
    try {
        const movie = await updatedMovie(req.params, req.body);
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(400).json({ message: "invalid data or request", error: error.message })
    }
}

const getMovieById = async (req, res) => {
    try {
        const movie = await movieFromId(req.params);
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(400).json({ message: "invalid data or request", error: error.message })
    }
}

const getAllMovies = async (req, res) => {
    try {
        const movies = await allMovies();
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(400).json({ message: "invalid data or request", error: error.message })
    }
}

module.exports = { addNewMovie, updaterMovie, getMovieById, getAllMovies };