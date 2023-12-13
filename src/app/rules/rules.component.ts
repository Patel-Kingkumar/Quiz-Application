import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/services/question.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  name: string = "";

  constructor(private router: Router, private questionService: QuestionService) { }
  
  ngOnInit(): void {
     localStorage.removeItem("user-name");
  }

  start() {
    if (this.name != "") {
      localStorage.setItem("user-name", this.name);
      this.router.navigate(["/language"]);
    }
  }
}
