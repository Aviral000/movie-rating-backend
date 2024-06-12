const router = require("express").Router();

const { addNewMovie, updaterMovie, getMovieById, getAllMovies } = require("../controllers/movie.controller");
const { validMovieBody, validMovieParams } = require("../middlewares/validators/validMovie");

const passport = require("passport");
const authenticate = passport.authenticate("jwt", { session: false });

router.post("/", authenticate, validMovieBody, addNewMovie);
router.put("/:id", authenticate, validMovieParams, validMovieBody,  updaterMovie);
router.get("/:id", authenticate, validMovieParams, getMovieById);
router.get("/", authenticate, getAllMovies);

module.exports = router;