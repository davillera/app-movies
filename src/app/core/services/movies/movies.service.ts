import {inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from "@angular/fire/firestore";

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

  setFavoriteMovie(href: string){
    const moviesFavoriteRef = collection(this.firestore, 'favorites')
    return addDoc(moviesFavoriteRef, {href})
  }

  getMovie(href: string){
    const movieRef = collection(this.firestore, `movies/${href}`)
    return collectionData(movieRef)

  }
}
