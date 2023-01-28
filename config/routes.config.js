const { request } = require("express");
const express = require("express");

// Iteration 1: import common controller
const controllers = require("../controllers/common.controller");

// Iteration 3: import tweets controller

const router = express.Router();

// Iteration 1: link GET '/' with common controller home
router.get("/", controllers.home);

// Iteration 3: link GET '/tweets' with tweets controller list
// Iteration 4: link POST '/tweets' with tweets controller create
// Iteration 5: link POST '/tweets/:id/delete' with tweets controller delete

module.exports = router;
