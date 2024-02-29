import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {AUTH_DATA_TOKEN} from "@core/tokens/auth-data.token";
import {environment} from "../environments/environment";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: AUTH_DATA_TOKEN,
      useValue: environment.authData
    }
  ]
};
