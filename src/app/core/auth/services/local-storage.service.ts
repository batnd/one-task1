import { Injectable } from '@angular/core';
import {LoginData} from "@core/model/login-data.interface";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private usersDataKey: string = 'user';
  public setUsersData(usersData: LoginData): void {
    localStorage.setItem(this.usersDataKey, JSON.stringify(usersData));
  }

  public getUsersData(): LoginData | null {
    const userData: string | null = localStorage.getItem(this.usersDataKey);
    if (userData) return JSON.parse(userData);
    else return null;
  }

  public removeUsersData(): boolean {
    localStorage.removeItem(this.usersDataKey);
    return true;
  }
}
