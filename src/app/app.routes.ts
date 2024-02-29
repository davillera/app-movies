import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.routing').then(m => m.AUTH_ROUTES)
  }
];
