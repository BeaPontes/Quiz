import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Questao, Resposta } from '../../model/Quiz';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss'],
})
export class QuestaoComponent implements OnInit {
  @Input() questao: Questao;
  @Output() proximaQuestao = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  respostaQuestao(resposta: Resposta) {

    this.questao.escolhida = resposta.id;

    this.proximaQuestao.emit();
    // console.log(resposta.);
  }
}
