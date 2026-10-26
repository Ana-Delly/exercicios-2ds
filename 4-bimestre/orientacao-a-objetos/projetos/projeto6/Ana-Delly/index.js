const express = require("express")

const app = express()
const apiRouter = express.Router()
const materiaisRouter = express.Router()
const clientesRouter = express.Router()

const materiais = [
    { id: 1, nome: "Caderno", categoria: "escolar", preco: 22, disponivel: true },
    { id: 2, nome: "Caneta", categoria: "escrita", preco: 4, disponivel: true },
    { id: 3, nome: "Mochila", categoria: "acessorio", preco: 130, disponivel: false }
]

const clientes = [
    { id: 1, nome: "Ana", tipo: "escola" },
    { id: 2, nome: "Bruno", tipo: "avulso" }
]

materiaisRouter.get("/", (req, res) => {
    res.status(200).json(materiais)
})

materiaisRouter.get("/disponiveis", (req, res) => {
    res.status(200).json(materiais.filter((material) => material.disponivel))
})

materiaisRouter.get("/total", (req, res) => {
    res.status(200).json({ total: materiais.length })
})

materiaisRouter.post("/", (req, res) => {
    res.status(201).json({ mensagem: "Cadastro de material realizado" })
})

clientesRouter.get("/", (req, res) => {
    res.status(200).json(clientes)
})

clientesRouter.get("/total", (req, res) => {
    res.status(200).json({ total: clientes.length })
})

apiRouter.get("/", (req, res) => {
    res.status(200).json({ mensagem: "API de Papelaria" })
})

apiRouter.use("/materiais", materiaisRouter)
apiRouter.use("/clientes", clientesRouter)

app.use("/api", apiRouter)

module.exports = app