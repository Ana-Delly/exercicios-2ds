function notFound(req, res, next) {
  res.status(404).json({ erro: `Rota não encontrada: ${req.method} ${req.originalUrl}` });
}

function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({ erro: "Ocorreu um erro interno no servidor." });
}

module.exports = { notFound, errorHandler };
