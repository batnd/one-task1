import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {AuthService} from "@core/auth/services/auth.service";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  public authStatus$: BehaviorSubject<boolean> = this.authService.authStatus$;

  public logout(): void {
    if (this.authService.logout()) this.router.navigate(['/']);
  }
}
