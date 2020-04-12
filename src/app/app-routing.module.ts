import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { QuizComponent } from './pages/quiz/quiz.component';
import { QuestaoComponent } from './pages/questao/questao.component';

const routes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
  { path: 'quiz', component: QuizComponent,
    children: [
      {path: 'questao', component: QuestaoComponent}
    ],
  },
  // { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
