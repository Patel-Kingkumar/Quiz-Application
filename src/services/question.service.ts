import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {


  constructor(private http: HttpClient) { }

  getHtmlQuiz() {
    return this.http.get("./assets/html.json");
  }

  getCssQuiz() {
    return this.http.get("./assets/css.json");
  }

  getJavaScriptQuiz() {
    return this.http.get("./assets/javascript.json");
  }

  getJavaQuiz() {
    return this.http.get("./assets/java.json");
  }

  getPythonQuiz() {
    return this.http.get("./assets/python.json");
  }

  getAngularQuiz() {
    return this.http.get("./assets/ang.json");
  }

  getReactQuiz() {
    return this.http.get("./assets/react.json");
  }

  getRdbmsQuiz() {
    return this.http.get("./assets/rdbms.json");
  }

  getAndroidQuiz() {
    return this.http.get("./assets/android.json");
  }

  getSpringBootQuiz() {
    return this.http.get("./assets/springboot.json");
  }
}
