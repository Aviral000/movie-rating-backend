const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

const Review = mongoose.model("Reviews", reviewSchema);

module.exports = Review;