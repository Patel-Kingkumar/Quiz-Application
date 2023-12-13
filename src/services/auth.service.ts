import { Injectable } from '@angular/core';
import { AuthDialogueService } from './auth-dialogue.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName: any = localStorage.getItem("user-name");

  constructor(private authDialogueService:  AuthDialogueService) { }

  checkAuth() {
    if (this.userName) {
      return true;
    } else {
      this.authDialogueService.confirm('Warning....!', "Without enter name you can't start quiz")
      .then((confirmed: any) => {
        if (confirmed) {
          
        }
      })
      .catch(() => console.log("catch"));
      return false;
    }
  }
}
