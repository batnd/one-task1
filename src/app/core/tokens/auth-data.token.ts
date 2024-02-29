import {InjectionToken} from "@angular/core";
import {LoginData} from "@core/model/login-data.interface";

export const AUTH_DATA_TOKEN: InjectionToken<LoginData> = new InjectionToken<LoginData>('AuthDataToken');
