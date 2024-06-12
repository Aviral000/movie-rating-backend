const { signup, loggedIn, findUserFromUsername } = require('../services/user.service');

const registry = async (req, res) => {
    try {
        const data = await signup(req.body);
        if(data.token) {
            const cookie = res.cookie("token", data.token, {
                maxAge: 60 * 60 * 1000,
                httpOnly: true
            })
        }
        res.status(201).json({ created: data });
    } catch (error) {
        res.status(400).json({ error: "User is not created/registered" })
    }
}

const login = async (req, res) => {
    try {
        const data = await loggedIn(req.body);
        res.status(200).json({ created: data });
    } catch (error) {
        res.status(400).json({ error: "Wrong username/password" })
    }
}

const getUser = async(req, res) => {
    try {
        const user = await findUserFromUsername(req.params);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { registry, login, getUser }