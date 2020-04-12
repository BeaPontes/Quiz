export class Quiz {
    id: number;
    nome: string;
    qtdQuestoes: number;
    questoes: Array<Questao>;

    numeroQuestoes(): number {
        // informa o numero de questoes
        return;
    }
    getquestao(id: number): Questao {
        return this.questoes.find(item => item.id === id);
    }

    constructor() {
        this.questoes = new Array<Questao>();
    }
}

export class Questao {
    id: number;
    imagem: string;
    pergunta: string;
    escolhida: number;
    respostas: Array<Resposta>;

    getEscolhida(): number {
        // questão escolhida
        return;
    }
    proximaQuestao(): number {
        // proxima quetão
        return;
    }
    getResposta(id: number): Resposta {
        // pegar resposta por id
        return;
    }

    constructor() {
        this.respostas = new Array<Resposta>();
    }
}

export class Resposta {
    id: number;
    texto: string;
}
