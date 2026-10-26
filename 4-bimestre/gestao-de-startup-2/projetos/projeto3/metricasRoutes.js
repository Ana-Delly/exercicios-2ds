const express = require("express");
const router = express.Router();
const { obterMetricas } = require("../controllers/metricasController");

router.get("/", obterMetricas);

module.exports = router;
