const express = require("express")
const validarPedido = require("../middlewares/validarPedido")

const router = express.Router()

const pedidos = [
    { id: 1, cliente: "Ana", pizza: "Mussarela", valor: 45, status: "entregue" },
    { id: 2, cliente: "Bruno", pizza: "Calabresa", valor: 48, status: "no forno" },
    { id: 3, cliente: "Carla", pizza: "Portuguesa", valor: 58, status: "no forno" }
]

router.get("/", (req, res) => {
    const { status, valorMin } = req.query
    let resultado = pedidos

    if (status) {
        resultado = resultado.filter(pedido => pedido.status === status)
    }

    if (valorMin !== undefined) {
        const valorMinimo = Number(valorMin)
        resultado = resultado.filter(pedido => pedido.valor >= valorMinimo)
    }

    res.status(200).json(resultado)
})

router.get("/:id", (req, res, next) => {
    const id = Number(req.params.id)
    const pedido = pedidos.find(item => item.id === id)

    if (!pedido) {
        const erro = new Error("Pedido nao encontrado")
        erro.status = 404
        return next(erro)
    }

    res.status(200).json(pedido)
})

router.post("/", validarPedido, (req, res) => {
    const { cliente, pizza, valor } = req.body
    const maiorId = Math.max(0, ...pedidos.map(pedido => pedido.id))

    pedidos.push({
        id: maiorId + 1,
        cliente,
        pizza,
        valor,
        status: "recebido"
    })

    res.status(201).json({ mensagem: "Registro de pedido criado" })
})

module.exports = router