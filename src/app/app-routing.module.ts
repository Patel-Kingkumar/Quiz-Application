import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesComponent } from './rules/rules.component';
import { QuestionComponent } from './question/question.component';
import { LanguageComponent } from './language/language.component';
import { PageNotComponent } from './page-not/page-not.component';
import { authGuard } from 'src/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'rules', pathMatch: 'full'},
  { path: 'language', component: LanguageComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'question/:name', component: QuestionComponent, canActivate: [authGuard] },
  { path: '**', component: PageNotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
