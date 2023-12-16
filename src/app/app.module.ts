import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './question/question.component';
import { RulesComponent } from './rules/rules.component';
import { LanguageComponent } from './language/language.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogueComponent } from './dialogue/dialogue.component';
import { PageNotComponent } from './page-not/page-not.component';
import { InfoDialogueComponent } from './info-dialogue/info-dialogue.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    RulesComponent,
    LanguageComponent,
    HeaderComponent,
    DialogueComponent,
    PageNotComponent,
    InfoDialogueComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
