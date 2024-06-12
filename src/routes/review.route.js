const router = require("express").Router();

const passport = require("passport");
const authenticate = passport.authenticate("jwt", { session: false });

router.post("/:id/reviews", authenticate);

module.exports = router;