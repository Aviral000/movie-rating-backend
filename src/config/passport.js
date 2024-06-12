const ExtractJWT = require("passport-jwt").ExtractJwt;
const JWTStrategy = require("passport-jwt").Strategy;
require("dotenv").config();

const { findUserFromUsername } = require("../services/user.service")

const option = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}

const jwtStrategy = new JWTStrategy(option, async (payload, done) => {
    try {
        const user = await findUserFromUsername(payload);
        return done(null, user);
    } catch (error) {
        return done(error, false)
    }
})

module.exports = (passport) => {
    passport.use(jwtStrategy);
}