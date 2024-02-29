import {inject, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {AUTH_DATA_TOKEN} from "@core/tokens/auth-data.token";
import {LoginData} from "@core/model/login-data.interface";
import {Router} from "@angular/router";
import {LocalStorageService} from "@core/auth/services/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authData: LoginData = inject(AUTH_DATA_TOKEN);
  private router: Router = inject(Router);
  private localStorageService: LocalStorageService = inject(LocalStorageService);
  public authStatus$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public authErrors$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    const usersDataExist: LoginData | null = this.localStorageService.getUsersData();
    if (usersDataExist && usersDataExist.login === this.authData.login && usersDataExist.password === this.authData.password) {
      this.authStatus$.next(true);
    }
  }

  public login(loginData: LoginData): boolean {
    if (loginData.login === this.authData.login && loginData.password === this.authData.password) {
      this.authErrors$.next(false);
      this.authStatus$.next(true);
      this.localStorageService.setUsersData(loginData);
      return true;
    } else {
      this.authErrors$.next(true);
      return false
    }
  }

  public logout(): boolean {
    this.authErrors$.next(false);
    this.authStatus$.next(false);
    this.localStorageService.removeUsersData();
    return true;
  }

  public isLoggedIn(): boolean {
    return this.authStatus$.value;
  }
}
