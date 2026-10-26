const agendamentos = require("../data/agendamentos");

// Valores simulados para o trabalho escolar. Substituir por dados medidos
// quando houver instrumentação e período de coleta definido.
function obterMetricas(req, res) {
  const totalAgendamentos = agendamentos.length;
  const confirmados = agendamentos.filter((a) => a.status === "confirmado").length;
  const cancelados = agendamentos.filter((a) => a.status === "cancelado").length;

  res.json({
    aviso: "Métricas de produto parcialmente simuladas para fins acadêmicos.",
    periodo: "19 a 25/10/2026",
    metricasSimuladas: {
      retencaoSemanalPercentual: 40,
      ativacaoPercentual: 50,
      bugsAbertos: 8,
      commitsNoPeriodo: 15,
      nps: null
    },
    nps: {
      status: "Aguardando pelo menos 10 respostas reais",
      formula: "% de promotores - % de detratores",
      valor: null
    },
    agendamentosDoServidor: {
      total: totalAgendamentos,
      confirmados,
      cancelados
    }
  });
}

module.exports = { obterMetricas };
