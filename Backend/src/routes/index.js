const express = require("express");
const router = express.Router();
const Transfer = require("./Transfer/dataTravelandz");

router.use("/app", Transfer);

module.exports = router;
