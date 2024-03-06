import {Component, inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {MoviesService} from "../../../core/services/movies/movies.service";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    ToastModule,
    ButtonModule,
    RouterLink
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit {


  movieTitle: string | null = '';
  selectedMovie: any

  private movieService = inject(MoviesService);
  private routes = inject(ActivatedRoute);
  private router = inject(Router);
  private messageService = inject(MessageService);

  constructor() {
  }

  ngOnInit() {
    this.getTitleMovie();

  }

  getTitleMovie() {
    this.movieTitle = this.routes.snapshot.paramMap.get('title');
    console.log(this.movieTitle);
    this.getMovie();
  }

  async getMovie() {
    this.selectedMovie = await this.movieService.getMovie(this.movieTitle);
    if (this.selectedMovie === null) {
      await this.router.navigate(['/404']);
    }
  }


  async addFavorites() {
    try {
      await this.movieService.addFavoriteMovie(this.selectedMovie);
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Movie added to favorites'});
    } catch (error) {
      console.error(error);
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Movie already in favorites'});
    }
  }
}
