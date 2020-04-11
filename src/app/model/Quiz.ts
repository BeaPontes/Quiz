export class Quiz {
    id: number;
    nome: string;
    qtdQuestoes: number;
    questoes: Array<Questao>;

    numeroQuestoes(): number{
        // informa o numero de questoes
        return;
    }
    getquestao(id: number): Questao {
        // pegar questão por id
        return;
    }

}

class Questao {
    id: number;
    imagem: string;
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
}

class Resposta {
    id: number;
    texto: string;
}
