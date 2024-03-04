import {Routes} from "@angular/router";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";

export const MOVIES_ROUTES: Routes = [
  {
    path: '',
    component: MovieListComponent,
    // canActivate: [AngularFireAuthGuard]
  },
  {
    path: ':title',
    component: MovieDetailComponent,
    // canActivate: [AngularFireAuthGuard]
  }

]
