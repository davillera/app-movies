import {Component, inject, OnInit} from '@angular/core';
import {SearchComponent} from "../../../shared/header/search/search.component";
import {AuthService} from "../../../core/services/auth/auth.service";
import {MoviesService} from "../../../core/services/movies/movies.service";
import {MessageService} from "primeng/api";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [
    SearchComponent,
    CardModule
  ],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent implements OnInit {

  moviesFavorites: any

  private authservice = inject(AuthService);
  private moviesService = inject(MoviesService);
  private messageService = inject(MessageService);

  logout() {
    this.authservice.logOut();
  }

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    this.moviesService.getFavorites().subscribe({
        next: (data: any) => {
          this.moviesFavorites = data
          console.log(this.moviesFavorites);
        },
        error: (error: any) => {
          this.messageService.add({severity: 'error', summary: 'Error', detail: error});
        }
      }
    )
  }


}
