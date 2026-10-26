const express = require("express");
const router = express.Router();
const {
  listarAgendamentos,
  buscarAgendamento,
  criarAgendamento,
  cancelarAgendamento
} = require("../controllers/agendamentosController");

router.get("/", listarAgendamentos);
router.get("/:id", buscarAgendamento);
router.post("/", criarAgendamento);
router.patch("/:id/cancelar", cancelarAgendamento);

module.exports = router;
