import {Component, inject, Input, OnInit} from '@angular/core';
import {SharedService} from "../../../shared/services/shared.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MoviesService} from "../../../core/services/movies/movies.service";

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit {


  movieTitle: string | null = '';
  selectedMovie: any

  private sharedService = inject(SharedService);
  private movieService = inject(MoviesService);
  private routes = inject(ActivatedRoute);
  private router = inject(Router);

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
    console.log(this.selectedMovie);
  }


}
