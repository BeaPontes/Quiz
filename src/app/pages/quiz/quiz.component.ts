import { Component, OnInit } from '@angular/core';
import {Quiz} from '../../model/Quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {

  quiz: Quiz;
  imagem = 'https://i0.wp.com/designsrock.org/wp-content/uploads/2017/07/moon-setting-Desktop-Wallpaper-HD-Backgrounds-660x330.jpg';
  titulo = 'Que cor é o mar? ';
  pergunta1 = 'amarelo';
  pergunta2 = 'azul';
  pergunta3 = 'vermelho';
  pergunta4 = 'branco';

  constructor() { }

  ngOnInit() {
    this.quiz.questoes[0].respostas[2]

    this.quiz.getquestao(1).getResposta(2).texto

    /*
      pegar questão por id
      pegar resposta da questão por id
      pegar resposta da quetão

      proxima questão
      número de perguntas
    */
  }

}
