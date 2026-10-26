const agendamentos = require("../data/agendamentos");
const quadras = require("../data/quadras");

function listarAgendamentos(req, res) {
  res.json({ total: agendamentos.length, agendamentos });
}

function buscarAgendamento(req, res) {
  const id = Number(req.params.id);
  const agendamento = agendamentos.find((item) => item.id === id);

  if (!agendamento) {
    return res.status(404).json({ erro: "Agendamento não encontrado." });
  }

  return res.json(agendamento);
}

function criarAgendamento(req, res) {
  const { nomeCliente, quadraId, data, horario } = req.body;

  if (
    typeof nomeCliente !== "string" || !nomeCliente.trim() ||
    !Number.isInteger(Number(quadraId)) ||
    typeof data !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(data) ||
    typeof horario !== "string" || !/^\d{2}:\d{2}$/.test(horario)
  ) {
    return res.status(400).json({
      erro: "Informe nomeCliente, quadraId, data (AAAA-MM-DD) e horario (HH:MM) válidos."
    });
  }

  const quadra = quadras.find((item) => item.id === Number(quadraId));
  if (!quadra) {
    return res.status(404).json({ erro: "Quadra não encontrada." });
  }

  const conflito = agendamentos.some((item) =>
    item.quadraId === quadra.id &&
    item.data === data &&
    item.horario === horario &&
    item.status === "confirmado"
  );

  if (conflito) {
    return res.status(409).json({
      erro: "Já existe uma reserva confirmada para essa quadra, data e horário."
    });
  }

  const novoAgendamento = {
    id: agendamentos.length
      ? Math.max(...agendamentos.map((item) => item.id)) + 1
      : 1,
    nomeCliente: nomeCliente.trim(),
    quadraId: quadra.id,
    nomeQuadra: quadra.nome,
    data,
    horario,
    status: "confirmado",
    criadoEm: new Date().toISOString()
  };

  agendamentos.push(novoAgendamento);
  return res.status(201).json({
    mensagem: "Agendamento criado com sucesso.",
    agendamento: novoAgendamento
  });
}

function cancelarAgendamento(req, res) {
  const id = Number(req.params.id);
  const agendamento = agendamentos.find((item) => item.id === id);

  if (!agendamento) {
    return res.status(404).json({ erro: "Agendamento não encontrado." });
  }

  if (agendamento.status === "cancelado") {
    return res.status(400).json({ erro: "Este agendamento já está cancelado." });
  }

  agendamento.status = "cancelado";
  return res.json({
    mensagem: "Agendamento cancelado.",
    agendamento
  });
}

module.exports = {
  listarAgendamentos,
  buscarAgendamento,
  criarAgendamento,
  cancelarAgendamento
};
