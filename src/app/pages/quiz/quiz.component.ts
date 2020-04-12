import { Component, OnInit } from '@angular/core';
import { Quiz, Questao, Resposta } from '../../model/Quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {

    quiz: Quiz;
    questaoAtual: Questao;

    constructor() {
        this.quiz = new Quiz();
    }

    ngOnInit() {

        const dados = {
        'id': 1,
        'nome': 'Quiz dos cactos',
        'questoes':[
            {
                'id': 1,
                'imagem': 'https://blog.giulianaflores.com.br/wp-content/uploads/2016/04/flower-3164480_640.jpg',
                'pergunta': 'Como se deve tratar um cacto',
                'respostas': [
                    {
                        'id': 1,
                        'texto': 'Com amor e carinho'
                    },
                    {
                        'id': 2,
                        'texto': 'Com odio e brutalidade'
                    },
                    {
                        'id': 3,
                        'texto': 'Com ferramentas de jardinagem'
                    },
                    {
                        'id': 4,
                        'texto': 'Com agua'
                    }
                ]
        
            },
            {
                'id': 2,
                'imagem': 'https://t2.uc.ltmcdn.com/pt/images/1/1/8/como_cuidar_de_um_cacto_12811_600.jpg',
                'pergunta': 'Qual a frequencia que se deve molhar um cacto',
                'respostas': [
                    {
                        'id': 1,
                        'texto': '1 vez ao dia'
                    },
                    {
                        'id': 2,
                        'texto': '2 vezes por semana'
                    },
                    {
                        'id': 3,
                        'texto': 'Nunca'
                    },
                    {
                        'id': 4,
                        'texto': '5 vezes ao ano'
                    }
                ]
        
            },
            {
                'id': 3,
                'imagem': 'https://fscomps.fotosearch.com/compc/CSP/CSP994/flores-de-cacto-mammillaria-arquivos-de-fotografia__k16040825.jpg',
                'pergunta': 'Qual é o cacto mas famoso no mundo dos cactos',
                'respostas': [
                    {
                        'id': 1,
                        'texto': 'Cacto ouriço'
                    },
                    {
                        'id': 2,
                        'texto': 'Barba de velho'
                    },
                    {
                        'id': 3,
                        'texto': ' Capuz de monge'
                    },
                    {
                        'id': 4,
                        'texto': 'Mil cores'
                    }
                ]
        
            }
            ]
        };

        this.quiz.id = dados.id;
        this.quiz.nome = dados.nome;


        for (const dadoQuestao of dados.questoes) {

            const questao = new Questao();

            questao.id = dadoQuestao.id;
            questao.pergunta = dadoQuestao.pergunta;
            questao.imagem = dadoQuestao.imagem;

            for (const dadoReposta of dadoQuestao.respostas) {
                const resposta = new Resposta();
                resposta.id = dadoReposta.id;
                resposta.texto = dadoReposta.texto;

                questao.respostas.push(resposta);
            }

            this.quiz.questoes.push(questao);
        }

        this.questaoAtual = this.quiz.getquestao(1);
    }

    proximaQuestao() {
    }
}
