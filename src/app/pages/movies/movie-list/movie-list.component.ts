import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {CardModule} from "primeng/card";
import {DeferModule} from "primeng/defer";
import {NgClass} from "@angular/common";
import {MoviesService} from "../../../core/services/movies/movies.service"
import {SharedService} from "../../../shared/services/shared.service";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {HeaderComponent} from "../../../shared/header/header.component";
import MovieInterface from "../../../core/interface/movie.interface";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  providers: [MessageService],
  imports: [
    CardModule,
    DeferModule,
    NgClass,
    ToastModule,
    HeaderComponent
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit {

  movies: MovieInterface[] = [];

  @Output() movieSelected = new EventEmitter<any>();

  private router = inject(Router);
  private moviesService = inject(MoviesService);
  private messageService = inject(MessageService);
  private sharedService = inject(SharedService);

  ngOnInit() {
    this.getMovies()
  }

  getMovies() {
    this.moviesService.getMovies().subscribe({
        next: (data: any) => {
          this.movies = data;
        },
        error: (error: any) => {
          this.messageService.add({severity: 'error', summary: 'Error', detail: error});
        }
      }
    )
  }


  onSelectMovie(movie: any) {
    this.sharedService.setSelectedMovie(movie);
    // console.log(movie)
    this.router.navigate(['movies', movie.title]);
  }
}
