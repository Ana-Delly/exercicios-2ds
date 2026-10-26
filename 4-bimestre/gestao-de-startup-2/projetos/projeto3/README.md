# Quadra Fácil

API de exemplo para agendamento de quadras esportivas, organizada em rotas, controladores e dados em memória.

> **Aviso:** este projeto é didático. Os agendamentos ficam apenas na memória e são apagados quando o servidor reinicia. Não use dados simulados como se fossem resultados reais.

## Requisitos
- Node.js instalado
- npm

## Como executar
```bash
npm install
npm run dev
```
Ou:
```bash
npm start
```

O servidor inicia em `http://localhost:3000`.

## Rotas
| Método | Rota | Descrição |
|---|---|---|
| GET | `/` | Informações da API |
| GET | `/api/quadras` | Lista quadras |
| GET | `/api/agendamentos` | Lista agendamentos |
| GET | `/api/agendamentos/:id` | Busca um agendamento |
| POST | `/api/agendamentos` | Cria um agendamento |
| PATCH | `/api/agendamentos/:id/cancelar` | Cancela um agendamento |
| GET | `/api/metricas` | Mostra métricas de exemplo |

## Exemplo de reserva
Envie um `POST` para `/api/agendamentos` com o corpo JSON:
```json
{
  "nomeCliente": "Ana",
  "quadraId": 1,
  "data": "2026-11-02",
  "horario": "15:00"
}
```

## Observações
- Os dados iniciais e as métricas são simulados.
- O NPS real deve ser calculado após coletar pelo menos 10 respostas reais.
- Esta versão não tem banco de dados, login ou pagamento.
