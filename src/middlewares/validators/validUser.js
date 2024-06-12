const { userJoi, userJoi2 } = require("./userValidation");

const userValidation = (req, res, next) => {
    const { error } = userJoi.body.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
};

const userValidation2 = (req, res, next) => {
    const { error } = userJoi2.body.validate(req.body);

    if(error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
}

module.exports = { userValidation, userValidation2 };
