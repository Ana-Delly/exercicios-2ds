const quadras = require("../data/quadras");

function listarQuadras(req, res) {
  res.json({ total: quadras.length, quadras });
}

module.exports = { listarQuadras };
