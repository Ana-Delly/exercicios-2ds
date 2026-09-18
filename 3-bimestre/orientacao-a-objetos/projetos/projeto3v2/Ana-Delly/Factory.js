const Apolice = require("./Apolice")

class Factory {
    static criar(tipo, segurado) {

        if (tipo === "auto") {
            return new Apolice.Auto(segurado)
        }

        if (tipo === "residencial") {
            return new Apolice.Residencial(segurado)
        }

        if (tipo === "vida") {
            return new Apolice.Vida(segurado)
        }

        throw new Error("Tipo de apólice inválido")
    }
}

module.exports = Factory