const router = require("express").Router();

const { registry, login } = require("../controllers/user.controller");
const { userValidation, userValidation2 } = require("../middlewares/validators/validUser");

router.post("/register", userValidation, registry);
router.post("/login", userValidation2, login );

module.exports = router;
