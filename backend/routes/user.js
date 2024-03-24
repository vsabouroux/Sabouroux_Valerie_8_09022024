const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

router.post("/createOwner", userCtrl.createOwner);
router.post("/login", userCtrl.login);

module.exports = router;
