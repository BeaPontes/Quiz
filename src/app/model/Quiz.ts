export class Quiz {
    id: number;
    nome: string;
    qtdQuestoes: number;
    questoes: Array<Questao>;

    numeroQuestoes(): number {
       return this.questoes.length;
    }
    getquestao(id: number): Questao {
        return this.questoes.find(item => item.id === id);
    }

    proximaQuestao(id: number): number {

        const proxima = ++id;
        const totalQuestoes = this.numeroQuestoes();

        if (proxima <= totalQuestoes) {
            return proxima;
        }

        return;
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
