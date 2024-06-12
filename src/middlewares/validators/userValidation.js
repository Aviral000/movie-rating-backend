const Joi = require("joi");

const userJoi = {
    body: Joi.object().keys({
        username: Joi.string()
            .min(3)
            .max(50)
            .regex(/^[a-zA-Z0-9]+$/)
            .required()
            .messages({
                'string.pattern.base': 'Username should contain only alphanumeric characters',
                'string.empty': 'Username cannot be an empty field',
                'string.min': 'Username should have a minimum length of {#limit}',
                'string.max': 'Username should have a maximum length of {#limit}',
                'any.required': 'Username is required'
            }),
        email: Joi.string()
            .email()
            .required()
            .messages({
                'string.email': 'Email must be a valid email address',
                'string.empty': 'Email cannot be an empty field',
                'any.required': 'Email is required'
            }),
        password: Joi.string()
            .min(6)
            .required()
            .messages({
                'string.min': 'Password should have a minimum length of {#limit}',
                'string.empty': 'Password cannot be an empty field',
                'any.required': 'Password is required'
            }),
    }),
};

const userJoi2 = {
    body: Joi.object().keys({
        email: Joi.string()
            .email()
            .required()
            .messages({
                'string.email': 'Email must be a valid email address',
                'string.empty': 'Email cannot be an empty field',
                'any.required': 'Email is required'
            }),
        password: Joi.string()
            .min(6)
            .required()
            .messages({
                'string.min': 'Password should have a minimum length of {#limit}',
                'string.empty': 'Password cannot be an empty field',
                'any.required': 'Password is required'
            }),
    })
}

module.exports = { userJoi, userJoi2 };
