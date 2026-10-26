const express = require("express");
const quadrasRoutes = require("./routes/quadrasRoutes");
const agendamentosRoutes = require("./routes/agendamentosRoutes");
const metricasRoutes = require("./routes/metricasRoutes");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "Bem-vindo à API Quadra Fácil!",
    rotas: [
      "GET /api/quadras",
      "GET /api/agendamentos",
      "POST /api/agendamentos",
      "PATCH /api/agendamentos/:id/cancelar",
      "GET /api/metricas"
    ]
  });
});

app.use("/api/quadras", quadrasRoutes);
app.use("/api/agendamentos", agendamentosRoutes);
app.use("/api/metricas", metricasRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Quadra Fácil rodando em http://localhost:${PORT}`);
});
