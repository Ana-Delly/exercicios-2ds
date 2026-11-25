const fs = require("fs/promises");

function caminhoArquivo() {
    return process.env.ARQUIVO_TROCAS || "trocas.json";
}

// RF01 - Listar todas as trocas
async function listar() {
    try {
        const dados = await fs.readFile(caminhoArquivo(), "utf-8");
        return JSON.parse(dados);
    } catch (erro) {
        if (erro.code === "ENOENT") {
            return [];
        }

        throw erro;
    }
}

// RF01 - Salvar uma nova troca
async function salvar(troca) {
    const lista = await listar();
    lista.push(troca);

    await fs.writeFile(
        caminhoArquivo(),
        JSON.stringify(lista, null, 2)
    );

    return troca;
}

// RF02 - Atualizar uma troca existente
async function atualizar(id, dados) {
    const lista = await listar();

    const indice = lista.findIndex(
        troca => troca.id === id
    );

    if (indice === -1) {
        return null;
    }

    lista[indice] = {
        ...lista[indice],
        ...dados
    };

    await fs.writeFile(
        caminhoArquivo(),
        JSON.stringify(lista, null, 2)
    );

    return lista[indice];
}

// RF02 - Remover uma troca
async function remover(id) {
    const lista = await listar();

    const novaLista = lista.filter(
        troca => troca.id !== id
    );

    if (novaLista.length === lista.length) {
        return false;
    }

    await fs.writeFile(
        caminhoArquivo(),
        JSON.stringify(novaLista, null, 2)
    );

    return true;
}

module.exports = {
    listar,
    salvar,
    atualizar,
    remover
};
