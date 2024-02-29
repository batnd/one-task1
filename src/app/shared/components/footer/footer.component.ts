import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "@core/auth/services/auth.service";
import {BehaviorSubject} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private authService: AuthService = inject(AuthService);
  public authStatus$: BehaviorSubject<boolean> = this.authService.authStatus$;
}
