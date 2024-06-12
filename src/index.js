const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport")
require("dotenv").config();

const userRouter = require("./routes/user.route");
const movieRouter = require("./routes/movie.route");
const jwtPassport = require("./config/passport")

const app = express();

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
};

jwtPassport(passport);

mongoose.connect(process.env.MONGO_URL, options)
    .then(console.log("database connected"))
    .catch(err => console.log("failed", err))

app.use(cors());

app.use(express.json());

app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/movie", movieRouter);

app.listen(8082, () => {
    console.log("listening");
})