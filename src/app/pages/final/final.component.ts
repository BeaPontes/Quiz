import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Quiz } from '../../model/Quiz';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss'],
})
export class FinalComponent implements OnInit {

  quiz: Quiz;

  constructor(private location: Location) {
    this.quiz = new Quiz();
   }

  ngOnInit() {
    const state = this.location.getState();
    this.quiz = state.quiz;
    console.log(this.quiz);
  }

  pegarTextoEscolhida(idQuestao: number) {
    const questao = this.quiz.questoes.find(item => item.id === idQuestao);
    const escolhida = questao.respostas.find(item => item.id === questao.escolhida);
    return escolhida.texto;
  }

}
