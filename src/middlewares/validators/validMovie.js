const { addMovieJoi } = require('./movieValidation');

const validMovieBody = (req, res, next) => {
    const { error } = addMovieJoi.body.validate(req.body);

    if(error) {
        res.status(400).json({ message: error.details[0] })
    }

    next();
}

module.exports = { validMovieBody }