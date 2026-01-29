const express = require("express");
const router = express.Router();

const controller = require("../controllers/user.controller");

router.get("/", controller.getUsers);
router.post("/", controller.createUser);
router.get("/:id", controller.getUserById);
router.delete("/:id", controller.deleteUser);

module.exports = router;
