import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.routing').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.routing').then(m => m.MOVIES_ROUTES)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.routing').then(m => m.FAVORITES_ROUTES)
  }
];
