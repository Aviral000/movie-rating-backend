const router = require("express").Router();

const { addReviewByMovieId, updateTheReview, deleteTheReview, getAllReviewsOfMovie, getAverageOfMovieRating } = require("../controllers/review.controller");

const passport = require("passport");
const authenticate = passport.authenticate("jwt", { session: false });

router.post("/:id/reviews", authenticate, addReviewByMovieId);
router.put("/:movieId/reviews/:reviewId", authenticate, updateTheReview)
router.delete("/:movieId/reviews/:reviewId", authenticate, deleteTheReview)
router.get("/:id/reviews", authenticate, getAllReviewsOfMovie);
router.get("/:id/averageRating", authenticate, getAverageOfMovieRating)

module.exports = router;