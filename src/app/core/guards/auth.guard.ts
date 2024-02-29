import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "@core/auth/services/auth.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  const isLoggedIn: boolean = authService.isLoggedIn();

  if (!isLoggedIn) router.navigate(['/']);
  return isLoggedIn;
};
