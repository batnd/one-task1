import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "@core/auth/services/auth.service";
import {BehaviorSubject} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  public authErrors$: BehaviorSubject<boolean> = this.authService.authErrors$;
  private fb: FormBuilder = inject(FormBuilder);
  public loginForm: FormGroup = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });

  public login(): void {
    if (this.loginForm.valid && this.loginForm.value.login && this.loginForm.value.password) {
      if (this.authService.login(this.loginForm.value)) this.router.navigate(['/profile']);
    }
  }
}
