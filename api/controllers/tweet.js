const express = require("express");
const { verifyToken } = require("../verifyToken.js");
const {
  createTweet,
  deleteTweet,
  likeOrDislike,
  getAllTweets,
  getUserTweets,
  getExploreTweets,
} = require("../controllers/tweet.js");