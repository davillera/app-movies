import {inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, Firestore, query, where} from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private href: string = '';

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
  setHref(href: string) {
    this.href = href;
  }

  getMovie(href: string){
    const movieRef = collection(this.firestore, 'movies')
    const q = query(movieRef, where('href', '==', href))
    return q

  }

}
