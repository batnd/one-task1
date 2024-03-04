import { Routes } from '@angular/router';
import {authForwardGuard} from "@core/guards/auth-forward.guard";
import {authGuard} from "@core/guards/auth.guard";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@pages/home/components/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('@pages/auth/components/login/login.component').then(c => c.LoginComponent),
    canActivate: [authForwardGuard]
  },
  {
    path: 'entertainment',
    loadComponent: () => import('@pages/entertainment/components/entertainment/entertainment.component').then(c => c.EntertainmentComponent),
    canActivate: [authGuard]
  },
  {
    path: 'profile',
    loadComponent: () => import('@pages/user-profile/components/user-profile/user-profile.component').then(c => c.UserProfileComponent),
    canActivate: [authGuard]
  },
  {
    path: 'news',
    loadComponent: () => import('@pages/news/components/news/news.component').then(c => c.NewsComponent),
    canActivate: [authGuard]
  },
  {
    path: 'about',
    loadComponent: () => import('@pages/about/components/about/about.component').then(c => c.AboutComponent),
    canActivate: [authGuard]
  },
  {
    path: 'directives',
    loadComponent: () => import('@pages/directives/components/directives/directives.component').then(c => c.DirectivesComponent),
  },
  {
    path: 'reactive-forms',
    loadComponent: () => import('@pages/reactive-forms/components/reactive-forms/reactive-forms.component').then(c => c.ReactiveFormsComponent),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
