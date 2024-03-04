import {inject, Injectable} from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private firestore = inject(Firestore)

  constructor() { }

  getMovies() {
    const moviesRef = collection(this.firestore, 'movies');
    return collectionData(moviesRef)
  }
}
