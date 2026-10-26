const express = require("express");
const router = express.Router();
const { listarQuadras } = require("../controllers/quadrasController");

router.get("/", listarQuadras);

module.exports = router;
