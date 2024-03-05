import {inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, Firestore, getDoc, getDocs, query, where} from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private firestore = inject(Firestore)

  getMovies() {
    const moviesRef = collection(this.firestore, 'movies');
    return collectionData(moviesRef)
  }

  async getMovie(movieTitle: string | null) {
    const moviesRef = collection(this.firestore, 'movies');
    const q = query(moviesRef, where('title', '==', movieTitle));

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return doc.data();
    } else {
      return null;
    }
  }



}
