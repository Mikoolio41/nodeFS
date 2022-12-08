const express = require("express");
const { getQuery } = require("../controllers/actors");
const router = express.Router();

router.get("/", getQuery);
