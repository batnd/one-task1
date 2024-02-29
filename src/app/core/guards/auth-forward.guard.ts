import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "@core/auth/services/auth.service";
import {inject} from "@angular/core";

export const authForwardGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  const isUserLoggedIn: boolean = authService.isLoggedIn();

  if (isUserLoggedIn) {
    router.navigate(['/']);
    return false;
  }
  return true;
};
