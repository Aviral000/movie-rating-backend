const { addMovieJoi, updateMovieJoi } = require('./movieValidation');

const validMovieBody = (req, res, next) => {
    const { error } = addMovieJoi.body.validate(req.body);

    if(error) {
        res.status(400).json({ message: error.details[0] })
    }

    next();
}

const validMovieParams = (req, res, next) => {
    const { error } = updateMovieJoi.params.validate(req.params);

    if(error) {
        res.status(400).json({ message: error.details[0] })
    }

    next();
}

module.exports = { validMovieBody, validMovieParams }