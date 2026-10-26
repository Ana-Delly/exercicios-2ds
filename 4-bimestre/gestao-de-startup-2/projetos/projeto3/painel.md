# Painel de Métricas — Quadra Fácil

**Objetivo:** facilitar o agendamento de quadras esportivas.  
**Período de exemplo:** 19 a 25 de outubro de 2026.  
**Origem:** números simulados para fins acadêmicos; substituir por dados medidos quando disponíveis.

## Métricas escolhidas

| Métrica | Tipo | Valor de exemplo | Período | Se piorar, vamos... |
|---|---|---:|---|---|
| Retenção semanal | Produto | 40% | 19–25/10/2026 | Investigar por que usuários não voltam. |
| NPS | Produto | A calcular | Outubro/2026 | Entrevistar usuários insatisfeitos. |
| Taxa de ativação | Produto | 50% | 19–25/10/2026 | Simplificar o primeiro acesso. |
| Bugs abertos | Código | 8 | 19–25/10/2026 | Priorizar correções. |
| Commits realizados | Código | 15 | 19–25/10/2026 | Verificar se alguém está bloqueado. |

## NPS

Aplicar a pergunta a pelo menos 10 pessoas reais: “De 0 a 10, quanto você recomendaria este produto?”

- Promotores: notas 9–10.
- Neutros: notas 7–8.
- Detratores: notas 0–6.

Promotores (%) = (promotores ÷ total de respostas) × 100  
Detratores (%) = (detratores ÷ total de respostas) × 100  
NPS = % de promotores − % de detratores

**Resultado:** preencher depois da pesquisa real.

## Retenção

Dados simulados: 40 usuários voltaram de 100 usuários iniciais.

Retenção = (usuários que voltaram ÷ usuários iniciais) × 100  
Retenção = (40 ÷ 100) × 100 = **40%**

## Churn

Dados simulados: 60 usuários não voltaram de 100 usuários iniciais.

Churn = (usuários que saíram ÷ usuários no início) × 100  
Churn = (60 ÷ 100) × 100 = **60%**

Conferência: retenção + churn = 40% + 60% = **100%**.

*Para esta demonstração, churn é definido como a parcela da mesma população que não retornou no período.*

## Funil AARRR

| Etapa | Pessoas | Conversão da etapa anterior |
|---|---:|---:|
| Aquisição | 100 | — |
| Ativação | 50 | 50% |
| Retenção | 20 | 40% |
| Receita | 10 | 50% |
| Recomendação | NPS a calcular | A calcular |

### Quedas entre etapas

- Aquisição → Ativação: (100 − 50) ÷ 100 × 100 = **50%**
- Ativação → Retenção: (50 − 20) ÷ 50 × 100 = **60%**
- Retenção → Receita: (20 − 10) ÷ 20 × 100 = **50%**

**Maior queda:** entre Ativação e Retenção, com perda de **60%**.

## Próxima ação proposta

Investigar dificuldades no processo de agendamento e avaliar uma simplificação para aumentar a retenção. A equipe precisa discutir as alternativas, votar e registrar a decisão em `decisao.md`.
