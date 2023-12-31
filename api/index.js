const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")

const userRoutes = require("./routes/users.js")
const authRoutes = require("./routes/auths.js")
const tweetRoutes = require("./routes/tweets.js")


const app = express();
dotenv.config();

const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connect to mongodb database");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cookieParser());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tweets", tweetRoutes);

app.listen(8000, () => {
  connect();
  console.log("Listening to port 8000");
});