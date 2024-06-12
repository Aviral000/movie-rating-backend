const { addReviewFromId, updateReview, deleteReview, allReviewsOfMovie, getAverage } = require("../services/review.service");

const addReviewByMovieId = async(req, res) => {
    try {
        const review = await addReviewFromId(req.params, req.body);
        return res.status(201).json(review);
    } catch (error) {
        return res.status(400).json({ message: "invalid data or request", error: error.message })
    }
}

const updateTheReview = async (req, res) => {
    try {
        const review = await updateReview(req.params, req.body);
        return res.status(200).json(review);
    } catch (error) {
        return res.status(400).json({ message: "invalid data or request", error: error.message })
    }
}

const deleteTheReview = async (req, res) => {
    try {
        const review = await deleteReview(req.params, req.body);
        return res.status(204).json(review);
    } catch (error) {
        return res.status(400).json({ message: "invalid data or request", error: error.message })
    }
}

const getAllReviewsOfMovie = async (req, res) => {
    try {
        const review = await allReviewsOfMovie(req.params);
        return res.status(200).json(review);
    } catch (error) {
        return res.status(400).json({ message: "invalid data or request", error: error.message });
    }
}

const getAverageOfMovieRating = async (req, res) => {
    try {
        const review = await getAverage(req.params);
        return res.status(200).json(review);
    } catch (error) {
        return res.status(400).json({ message: "invalid data or request", error: error.message });
    }
}

module.exports = { addReviewByMovieId, updateTheReview, deleteTheReview, getAllReviewsOfMovie, getAverageOfMovieRating }