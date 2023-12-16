import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  languages = [
    { name: 'html', description: 'Front-end', image: './assets/images/html.png '},
    { name: 'css', description: 'Front-end', image: './assets/images/css.png '},
    { name: 'js', description: 'Front-end', image: './assets/images/js.png '},
    { name: 'java', description: 'Back-end', image: './assets/images/java.jpg'},
    { name: 'python', description: 'Back-end', image: './assets/images/python.png'},
    { name: 'angular', description: 'Front-end', image: './assets/images/angular.png'},
    { name: 'react', description: 'Front-end', image: './assets/images/react.png'},
    { name: 'rdbms', description: 'Back-end', image: './assets/images/rdbms.png'},
    { name: 'android', description: 'mobile-app', image: './assets/images/android.png'},
    { name: 'springboot', description: 'Back-end', image: './assets/images/spring_boot.png'}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goQuiz(lang: string) {
    this.router.navigate(["/question", lang]);
  }
}
