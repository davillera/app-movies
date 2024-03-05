import {inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, Firestore, getDoc, getDocs, query, where} from "@angular/fire/firestore";
import {Auth} from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private firestore = inject(Firestore)
  private auth = inject(Auth)

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

  async addFavoriteMovie(href: string): Promise<void> {
    const user = this.auth.currentUser;
    if (!user) {
      throw new Error('No user logged in');
    }

    const favoritesRef = collection(this.firestore, `users/${user.uid}/favorites`);
    const q = query(favoritesRef, where('movieId', '==', href));

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      // La película ya está en favoritos
      throw new Error('Movie is already in favorites'); // Lanza un error específico
    }

    await addDoc(favoritesRef, {
      href,
      user: user.uid,
    });
  }

  getFavorites() {
    const user = this.auth.currentUser;
    if (!user) {
      throw new Error('No user logged in');
    }

    const favoritesRef = collection(this.firestore, `users/${user.uid}/favorites`);
    return collectionData(favoritesRef);
  }

}
