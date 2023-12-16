import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DialogueService } from 'src/services/dialogue.service';
import { QuestionService } from 'src/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  allQuestion: any = "";
  currentQuestion: number = 0;
  points: number = 0;
  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  skipAnswer: number = 0;
  questionAttempt: number = 0;
  dispResult: boolean = false;
  selectedLangUrl = this.router.url;
  selectedOption: any = "";
  timer: number = 30;
  interval: any;
  rightAnswer: any = "";
  skipDisable: any = true;
  answerDisable: boolean = false;
  selectAns: boolean = false;
  minTimer: number = 5;
  hideTimer: boolean = true;

  constructor(private router: Router, private render: Renderer2, private questionService: QuestionService, private dialogueService: DialogueService) { }

  ngOnInit(): void {
    this.skipDisable = false;
    this.getAllQuestions();
  }

  getAllQuestions() {

    if (this.selectedLangUrl == "/question/html") {
      this.questionService.getHtmlQuiz().subscribe((data: any) => {
        this.allQuestion = data.questions.sort(() => 0.5 - Math.random());
        this.allQuestion = data.questions.map((data: any) => {
          data.options.sort(() => 0.5 - Math.random())
          return data;
        })
        this.startTimer();
      })
    }

    if (this.selectedLangUrl == "/question/css") {
      this.questionService.getCssQuiz().subscribe((data: any) => {
        this.allQuestion = data.questions.sort(() => 0.5 - Math.random());
        this.allQuestion = data.questions.map((data: any) => {
          data.options.sort(() => 0.5 - Math.random())
          return data;
        })
        this.startTimer();
      })
    }

    if (this.selectedLangUrl == "/question/js") {
      this.questionService.getJavaScriptQuiz().subscribe((data: any) => {
        this.allQuestion = data.questions.sort(() => 0.5 - Math.random());
        this.allQuestion = data.questions.map((data: any) => {
          data.options.sort(() => 0.5 - Math.random())
          return data;
        })
        this.startTimer();
      })
    }

    if (this.selectedLangUrl == "/question/java") {
      this.questionService.getJavaQuiz().subscribe((data: any) => {
        this.allQuestion = data.questions.sort(() => 0.5 - Math.random());
        this.allQuestion = data.questions.map((data: any) => {
          data.options.sort(() => 0.5 - Math.random())
          return data;
        })
        this.startTimer();
      })
    }

    if (this.selectedLangUrl == "/question/python") {
      this.questionService.getPythonQuiz().subscribe((data: any) => {
        this.allQuestion = data.questions.sort(() => 0.5 - Math.random());
        this.allQuestion = data.questions.map((data: any) => {
          data.options.sort(() => 0.5 - Math.random())
          return data;
        })
        this.startTimer();
      })
    }

    if (this.selectedLangUrl == "/question/angular") {
      this.questionService.getAngularQuiz().subscribe((data: any) => {
        this.allQuestion = data.questions.sort(() => 0.5 - Math.random());
        this.allQuestion = data.questions.map((data: any) => {
          data.options.sort(() => 0.5 - Math.random())
          return data;
        })
        this.startTimer();
      })
    }

    if (this.selectedLangUrl == "/question/react") {
      this.questionService.getReactQuiz().subscribe((data: any) => {
        this.allQuestion = data.questions.sort(() => 0.5 - Math.random());
        this.allQuestion = data.questions.map((data: any) => {
          data.options.sort(() => 0.5 - Math.random())
          return data;
        })
        this.startTimer();
      })
    }

    if (this.selectedLangUrl == "/question/rdbms") {
      this.questionService.getRdbmsQuiz().subscribe((data: any) => {
        this.allQuestion = data.questions.sort(() => 0.5 - Math.random());
        this.allQuestion = data.questions.map((data: any) => {
          data.options.sort(() => 0.5 - Math.random())
          return data;
        })
        this.startTimer();
      })
    }

    if (this.selectedLangUrl == "/question/android") {
      this.questionService.getAndroidQuiz().subscribe((data: any) => {
        this.allQuestion = data.questions.sort(() => 0.5 - Math.random());
        this.allQuestion = data.questions.map((data: any) => {
          data.options.sort(() => 0.5 - Math.random())
          return data;
        })
        this.startTimer();
      })
    }

    if (this.selectedLangUrl == "/question/springboot") {
      this.questionService.getSpringBootQuiz().subscribe((data: any) => {
        this.allQuestion = data.questions.sort(() => 0.5 - Math.random());
        this.allQuestion = data.questions.map((data: any) => {
          data.options.sort(() => 0.5 - Math.random())
          return data;
        })
        this.startTimer();
      })
    }

  }

  // prevQuestion() {
  //   this.minTimer = 5;
  //   this.answerDisable = true;
  //   this.currentQuestion--;
  //   console.log("currentQuestion  : ", this.currentQuestion);
  //   var allData = Object.values(this.allQuestion[this.currentQuestion]?.options).filter((data: any) => {
  //     if (data.correct) {
  //       this.rightAnswer = data.text;
  //       return data.text;
  //     }
  //   });
  //   this.timer = 30;
  //   setTimeout(() => {
  //     this.currentQuestion++;
  //     this.answerDisable = false;
  //     this.rightAnswer = "";
  //   }, 5000);
  // }

  skipQuestion() {
    this.dialogueService.confirm('Please confirm....!', 'Do you really want to skip this question ?')
      .then((confirmed: any) => {
        if (confirmed) {
          this.currentQuestion++;
          this.skipAnswer++;
          this.timer = 30;
          this.showResult();
        }
      })
      .catch(() => console.log("catch"));
  }

  showResult() {
    if (this.currentQuestion == this.allQuestion.length) {
      this.dispResult = true;
    }
  }

  nextQuestion() {
    this.skipDisable = false;
    this.currentQuestion++;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      }
      if (this.timer == 0) {
        this.currentQuestion++;
        this.skipAnswer++;
        this.timer = 30;
      }
      if (this.currentQuestion == this.allQuestion.length) {
        clearInterval(this.interval);
        this.dispResult = true;
      }
    }, 1000)
  }

  answer(currentQno: number, option: any) {
    this.hideTimer = false;
    this.minTimer = 5;
    this.selectAns = true;
    this.selectedOption = option.text;
    if (currentQno == this.allQuestion.length) {
      setTimeout(() => {
        this.dispResult = true;
      }, 5000)
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      this.hideTimer = true;
      setTimeout(() => {
        this.timer = 30;
        this.nextQuestion();
      }, 500);
    } else {
      this.interval = setInterval(() => {
        if(this.minTimer > 0) {
          this.minTimer--;
          // this.hideTimer = true;
        }
        if(this.minTimer == 0) {
          clearInterval(this.interval);
        }
      }, 1000)
      var allData = Object.values(this.allQuestion[this.currentQuestion]?.options).filter((data: any) => {
        if (data.correct) {
          this.rightAnswer = data.text;
          return data.text;
        }
      });
      this.rightAnswer = allData;
      this.rightAnswer = this.rightAnswer[0]['text'];
      if(option.text != this.rightAnswer) {
        this.skipDisable = true;
      } else {
        this.skipDisable = false;
      }
      setTimeout(() => {
        this.rightAnswer = "";
        this.timer = 30;
        this.nextQuestion();
        this.incorrectAnswer++;
        this.points -= 10;
        this.hideTimer = true;
      }, 5000);
    }

  }

  redirectHome() {
    this.router.navigate(['/rules']);
  }

}
