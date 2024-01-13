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
    { name: 'c', description: 'Assembly', image: './assets/images/c.png '},
    { name: 'cplusplus', description: 'Extra Assembly', image: './assets/images/cplusplus.png '},
    { name: 'csharp', description: '.NET Assembly', image: './assets/images/csharp.png '},
    { name: 'java', description: 'Back-end', image: './assets/images/java.jpg'},
    { name: 'python', description: 'Back-end', image: './assets/images/python.png'},
    { name: 'angular', description: 'Front-end', image: './assets/images/angular.png'},
    { name: 'react', description: 'Front-end', image: './assets/images/react.png'},
    { name: 'rdbms', description: 'Back-end', image: './assets/images/rdbms.png'},
    { name: 'springboot', description: 'Back-end', image: './assets/images/spring_boot.png'},
    { name: 'android', description: 'Mobile-app', image: './assets/images/android.png'},
    { name: 'kotlin', description: 'Mobile-app', image: './assets/images/kotlin.png'},
    { name: 'flutter', description: 'Mobile-app', image: './assets/images/flutter.png'}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goQuiz(lang: string) {
    this.router.navigate(["/question", lang]);
  }
}
