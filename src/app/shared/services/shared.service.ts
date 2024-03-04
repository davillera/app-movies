import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private selectedMovie: any;

  constructor() { }

  private searchQuerySubject = new BehaviorSubject<string>('')
  searchQuery$ = this.searchQuerySubject.asObservable();

  setSelectedMovie(movie: any) {
    this.selectedMovie = movie;
  }

  getSelectedMovie() {
    return this.selectedMovie;
  }

  updateSearchQuery(query: string) {
    this.searchQuerySubject.next(query);
  }


}
