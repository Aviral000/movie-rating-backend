const { addMovie, updatedMovie } = require("../services/movie.service");

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

module.exports = { addNewMovie, updaterMovie };