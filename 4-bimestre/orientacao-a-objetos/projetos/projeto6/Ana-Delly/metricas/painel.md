# Painel de métricas — API de Catálogo da Papelaria

> **Status dos dados:** os dados de uso e as respostas de NPS abaixo são simulados para demonstrar os cálculos. Não representam usuários ou respostas reais. Para a entrega final, substituam essa amostra por dados observados e coletem pelo menos 10 respostas reais de NPS.

**Produto:** API de catálogo da Papelaria  
**Período de referência da simulação:** 12 a 25/10/2026  
**Código:** inspeção do repositório em 26/10/2026

## Métricas

| Métrica | Tipo | Valor atual | Período | Se piorar, vamos... |
| --- | --- | --- | --- | --- |
| Taxa de ativação — visitantes que consultaram o catálogo | produto | 60% (60 de 100) — simulado | 12–18/10/2026 | revisar a primeira consulta ao catálogo e verificar se os materiais disponíveis estão fáceis de encontrar |
| Retenção na semana seguinte | produto | 30% (18 de 60) — simulado | coorte de 12–18/10; retorno em 19–25/10/2026 | conversar com usuários que não voltaram e priorizar a melhoria mais citada |
| NPS | produto | +40 — 10 respostas simuladas | 19–25/10/2026 | coletar respostas reais e entrevistar quem deu nota de 0 a 6 |
| Testes automatizados passando | código | 10 de 10 | execução em 26/10/2026 | corrigir a regressão e rodar novamente a suíte antes de adicionar novas rotas |
| Endpoints requeridos implementados | código | 7 de 7, implementados em `index.js` | execução dos testes em 26/10/2026 | investigar qualquer rota que deixe de responder conforme esperado |

### NPS

**Amostra demonstrativa simulada — não são respostas reais:**

Notas: `10, 9, 9, 9, 10, 9, 7, 8, 4, 5` (10 respostas)

```text
Promotores (9–10) = 6 pessoas → 6 ÷ 10 × 100 = 60%
Neutros (7–8)     = 2 pessoas
Detratores (0–6)  = 2 pessoas → 2 ÷ 10 × 100 = 20%

NPS = 60% − 20% = +40
```

**Antes de entregar:** substituir as notas simuladas por pelo menos 10 respostas reais à pergunta “De 0 a 10, quanto você recomendaria este produto?” e refazer a conta.

### Retenção e churn

Na coorte simulada, 60 usuários começaram a usar o catálogo e 18 voltaram na semana seguinte. Os 42 restantes não voltaram no período observado.

```text
Retenção = (usuários que voltaram ÷ usuários que começaram) × 100
Retenção = (18 ÷ 60) × 100 = 30%

Churn = (usuários que saíram ÷ usuários no início) × 100
Churn = (42 ÷ 60) × 100 = 70%

Retenção + Churn = 30% + 70% = 100%
```

## Funil AARRR

Números simulados para uma jornada de pessoas que visitam a loja e consultam o catálogo. Como a API ainda não registra eventos de uso, esses números não foram extraídos de telemetria.

| Etapa | Pessoas | Conversão da etapa anterior | Queda para a etapa seguinte |
| --- | ---: | ---: | ---: |
| Aquisição — visitaram a loja | 100 | — | 40% |
| Ativação — consultaram o catálogo | 60 | 60% | 70% |
| Retenção — voltaram na semana seguinte | 18 | 30% | 50% |
| Receita — concluíram uma compra | 9 | 50% | 33,3% |
| Recomendação — fizeram uma indicação | 6 | 66,7% | — |

NPS demonstrativo na etapa de recomendação: **+40** (10 respostas simuladas; ver cálculo acima).

**Maior queda:** entre **Ativação e Retenção**, com perda de **42 de 60 usuários**, ou **70%**.

## Observações sobre os dados de código

- Os 10 testes de `test/catalogo.test.js` passaram em 26/10/2026 após a instalação das dependências do projeto.
- Os 7 endpoints foram validados pelos testes automatizados; toda a implementação está concentrada em `index.js`, conforme solicitado.
