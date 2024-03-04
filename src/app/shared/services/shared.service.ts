import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private selectedMovie: any;

  constructor() { }

  setSelectedMovie(movie: any) {
    this.selectedMovie = movie;
  }

  getSelectedMovie() {
    return this.selectedMovie;
  }
}
