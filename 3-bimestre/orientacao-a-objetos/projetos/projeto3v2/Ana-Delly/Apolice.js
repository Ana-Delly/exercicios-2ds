class Apolice {
    constructor(segurado) {
        this.segurado = segurado
    }

    emitir() {
        throw new Error("Método emitir() deve ser implementado.")
    }
}

class Auto extends Apolice {
    emitir() {
        return `Apólice de seguro auto emitida para: ${this.segurado}`
    }
}

class Residencial extends Apolice {
    emitir() {
        return `Apólice de seguro residencial emitida para: ${this.segurado}`
    }
}

class Vida extends Apolice {
    emitir() {
        return `Apólice de seguro de vida emitida para: ${this.segurado}`
    }
}

module.exports = Apolice
module.exports.Auto = Auto
module.exports.Residencial = Residencial
module.exports.Vida = Vida