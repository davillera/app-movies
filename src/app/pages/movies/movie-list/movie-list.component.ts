import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {SearchComponent} from "../../../shared/header/search/search.component";
import {Router} from "@angular/router";
import {CardModule} from "primeng/card";
import {DeferModule} from "primeng/defer";
import {NgClass} from "@angular/common";
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    SearchComponent,
    CardModule,
    DeferModule,
    NgClass,
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit{

  // movies = movies;

  @Output() movieSelected = new EventEmitter<any>();

  private router = inject(Router);

  ngOnInit() {
  }


  onSelectMovie(movie: any) {
    this.movieSelected.emit(movie)
    console.log(movie)
    this.router.navigate(['movies', movie.href]);
  }
}
