const request = require("supertest")

let app

beforeEach(() => {
    jest.resetModules()
    app = require("../index")
})

test("GET /pedidos lista os tres pedidos iniciais", async () => {
    const res = await request(app).get("/pedidos")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
        { id: 1, cliente: "Ana", pizza: "Mussarela", valor: 45, status: "entregue" },
        { id: 2, cliente: "Bruno", pizza: "Calabresa", valor: 48, status: "no forno" },
        { id: 3, cliente: "Carla", pizza: "Portuguesa", valor: 58, status: "no forno" }
    ])
})

test("GET /pedidos filtra por status", async () => {
    const res = await request(app).get("/pedidos?status=no%20forno")

    expect(res.status).toBe(200)
    expect(res.body.map(pedido => pedido.id)).toEqual([2, 3])
})

test("GET /pedidos filtra por valor minimo", async () => {
    const res = await request(app).get("/pedidos?valorMin=58")

    expect(res.status).toBe(200)
    expect(res.body.map(pedido => pedido.id)).toEqual([3])
})

test("GET /pedidos combina os filtros", async () => {
    const res = await request(app).get("/pedidos?status=no%20forno&valorMin=58")

    expect(res.status).toBe(200)
    expect(res.body.map(pedido => pedido.id)).toEqual([3])
})

test("GET /pedidos/:id retorna o pedido correspondente", async () => {
    const res = await request(app).get("/pedidos/2")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ id: 2, cliente: "Bruno", pizza: "Calabresa", valor: 48, status: "no forno" })
})

test("GET /pedidos/:id encaminha erro 404 para id inexistente", async () => {
    const res = await request(app).get("/pedidos/99")

    expect(res.status).toBe(404)
    expect(res.body).toEqual({ erro: "Pedido nao encontrado" })
})

test("POST /pedidos cria um pedido valido", async () => {
    const res = await request(app)
        .post("/pedidos")
        .send({ cliente: "Diego", pizza: "Mussarela", valor: 45 })

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Registro de pedido criado" })
})

test("o pedido criado recebe o proximo id, status recebido e entra na listagem", async () => {
    await request(app)
        .post("/pedidos")
        .send({ cliente: "Diego", pizza: "Mussarela", valor: 45 })

    const res = await request(app).get("/pedidos")

    expect(res.body).toHaveLength(4)
    expect(res.body[3]).toEqual({ id: 4, cliente: "Diego", pizza: "Mussarela", valor: 45, status: "recebido" })
})

test("POST /pedidos exige cliente antes dos outros campos", async () => {
    const res = await request(app).post("/pedidos").send({ valor: 45 })

    expect(res.status).toBe(400)
    expect(res.body).toEqual({ erro: "O campo cliente e obrigatorio" })
})

test("POST /pedidos exige pizza", async () => {
    const res = await request(app)
        .post("/pedidos")
        .send({ cliente: "Diego", valor: 45 })

    expect(res.status).toBe(400)
    expect(res.body).toEqual({ erro: "O campo pizza e obrigatorio" })
})

test("POST /pedidos exige um valor numerico", async () => {
    const res = await request(app)
        .post("/pedidos")
        .send({ cliente: "Diego", pizza: "Mussarela", valor: "muitos" })

    expect(res.status).toBe(400)
    expect(res.body).toEqual({ erro: "O campo valor deve ser um numero" })
})

test("POST /pedidos rejeita valor menor ou igual a zero", async () => {
    const res = await request(app)
        .post("/pedidos")
        .send({ cliente: "Diego", pizza: "Mussarela", valor: 0 })

    expect(res.status).toBe(400)
    expect(res.body).toEqual({ erro: "O campo valor deve ser maior que zero" })
})

test("POST /pedidos sem corpo responde 400", async () => {
    const res = await request(app).post("/pedidos")

    expect(res.status).toBe(400)
    expect(res.body).toEqual({ erro: "O campo cliente e obrigatorio" })
})

test("um pedido invalido nao e acrescentado", async () => {
    await request(app).post("/pedidos").send({ valor: 45 })

    const res = await request(app).get("/pedidos")

    expect(res.body).toHaveLength(3)
})

test("uma rota inexistente responde 404", async () => {
    const res = await request(app).get("/qualquer-coisa")

    expect(res.status).toBe(404)
    expect(res.body).toEqual({ erro: "Rota nao encontrada" })
})
