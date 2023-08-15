const express = require("express");
const {
  getUser,
  update,
  deleteUser,
  follow,
  unFollow,
} = require("../controllers/user.js");
const { verifyToken } = require("../verifyToken.js");