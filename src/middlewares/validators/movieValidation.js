const Joi = require("joi");

const addMovieJoi = {
    body: Joi.object().keys({
        title: Joi.string().required()
            .messages({
                'string.empty': 'Username cannot be an empty field',
                'any.required': 'Username is required'
            }),
        director: Joi.string().min(2).required()
            .messages({
                'string.empty': 'Director cannot be an empty field',
                'string.min': 'Director should have a minimum length of {#limit}',
                'any.required': 'Director is required'
            }),
        genre: Joi.array().items(
            Joi.string().valid('Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi')
                .required()
                .messages({
                    'any.only': '{#label} must be one of [Action, Comedy, Drama, Horror, Romance, Sci-Fi]',
                    'any.required': 'Genre is required'
                })
            ).required()
                .messages({
                    'array.base': 'Genre must be an array',
                    'any.required': 'Genre is required'
            }),
        releaseYear: Joi.date(),
        description: Joi.string().min(15)
            .messages({
                'string.min': 'description should have a minimum length of {#limit}'
            })
    })
}

module.exports = { addMovieJoi }