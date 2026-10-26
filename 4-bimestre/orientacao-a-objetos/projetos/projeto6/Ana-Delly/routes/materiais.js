const express = require("express")
const router = express.Router()

const materiais = [{ id: 1, nome: "Caderno", categoria: "escolar", preco: 22, disponivel: true },
{ id: 2, nome: "Caneta", categoria: "escrita", preco: 4, disponivel: true },
{ id: 3, nome: "Mochila", categoria: "acessorio", preco: 130, disponivel: false }
]

