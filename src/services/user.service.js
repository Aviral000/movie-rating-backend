const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signup = async (data) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);
        const user = await User.create({ username: data.username, email:data.email, password: hashedPassword })
        return user;
    } catch (error) {
        return false;
    }
}

const loggedIn = async (data) => {
    try {
        const user = await User.findOne({ email: data.email });

        if (!user) {
            return false;
        }

        const passwordMatch = await bcrypt.compare(data.password, user.password);
        if (!passwordMatch) {
            return false;
        }

        const payload = { username: user.username };
        const expiryTime = { expiresIn: "1h" };
        const token = jwt.sign(payload, process.env.SECRET_KEY, expiryTime);

        if (!token) {
            return false;
        }

        return { user, token };
    } catch (error) {
        return false;
    }
}

const findUserFromUsername = async (data) => {
    try {
        const user = await User.findOne({ username: data.username });
        return user;
    } catch (error) {
        return false;
    }
}

module.exports = { signup, loggedIn, findUserFromUsername }