const express = require("express");
const controller = require("../controllers/task.controller");

const router = express.Router();

router.post("/", controller.createTask);
router.get("/", controller.getTasks);

module.exports = router;
