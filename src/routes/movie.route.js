const router = require("express").Router();

const { addNewMovie, updaterMovie } = require("../controllers/movie.controller");
const { validMovieBody } = require("../middlewares/validators/validMovie");

const passport = require("passport");
const authenticate = passport.authenticate("jwt", { session: false });

router.post("/", authenticate, validMovieBody, addNewMovie);
router.put("/:id",authenticate,  updaterMovie);

module.exports = router;