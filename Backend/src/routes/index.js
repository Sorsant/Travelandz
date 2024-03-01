const express = require("express");
const router = express.Router();
const Transfer = require("./Transfer/dataTravelandz");
const Users = require('./user/transferUser')
router.use("/app", Transfer);
router.use("/user", Users);


module.exports = router;
