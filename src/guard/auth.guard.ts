import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

export const authGuard: CanActivateFn = (route, state ) => {

  var authService = inject(AuthService);
  var authUser = authService.checkAuth();

  
  
  if(authUser) {
    return true;
  } else {
    return false
  }
};

// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService) { }
//   canActivate():
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//       var user = this.authService.checkAuth();
//       if(user) {
//         return false;
//       } else {
//         return true;
//       }
//   }
// }