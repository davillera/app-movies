import { Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'
import {AuthGuard} from "@angular/fire/auth-guard";



const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.routing').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.routing').then(m => m.MOVIES_ROUTES),
    // canActivate: [AuthGuard],
    // data: { authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.routing').then(m => m.FAVORITES_ROUTES),
    // canActivate: [AuthGuard],
    // data: { authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: '**',
    redirectTo: '404'
  },
  {
    path: '404',
    component: NotFoundComponent
  }
];
