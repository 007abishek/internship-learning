const express = require("express");
const controller = require("../controllers/user.controller");

const router = express.Router();
console.log("controller:", controller);

router.post("/", controller.createUser);
router.get("/", controller.getUsers);

module.exports = router;
