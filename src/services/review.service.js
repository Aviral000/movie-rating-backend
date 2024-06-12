const Review = require('../models/review.model');

const addReviewFromId = async (params, body) => {
    try {
        const movieId = params.id;
        const review = await Review.create({ movieId, ...body });
        return review;
    } catch (error) {
        throw new Error(`Failed to add review: ${error.message}`);
    }
};

const updateReview = async (params, body) => {
    try {
        const { movieId, reviewId } = params;
        const review = await Review.findOneAndUpdate(
            { movieId, _id: reviewId },
            body,
            { new: true }
        );
        return review;
    } catch (error) {
        throw new Error(`Failed to update review: ${error.message}`);
    }
}

const deleteReview = async (params, body) => {
    try {
        const { movieId, reviewId } = params;
        const review = await Review.findOneAndDelete(
            { movieId, _id: reviewId },
            body,
            { new: true }
        );
        return review;
    } catch (error) {
        throw new Error(`Failed to delete review: ${error.message}`);
    }
}

const allReviewsOfMovie = async (params) => {
    try {
        const reviews = await Review.find({ movieId: params.id });
        return reviews;
    } catch (error) {
        throw new Error(`Failed to retrieve review: ${error.message}`);
    }
}

const getAverage = async (params) => {
    try {
        const avg = await Review.aggregate([
            {
                $match: { movieId: params.id }
            },
            {
                $group: {
                _id: "Average-Rating",
                totalSum: { $sum: '$rating' },
                length: { $sum: 1 }
                }
            },
            {
                $project: {
                avg: { $divide: ['$totalSum', '$length'] }
                }
            }
        ]);
        return avg;
    } catch (error) {
        throw new Error(`Failed to average rating: ${error.message}`);
    }
}

module.exports = { addReviewFromId, updateReview, deleteReview, allReviewsOfMovie, getAverage };