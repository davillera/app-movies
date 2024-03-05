import {inject, Injectable} from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@angular/fire/auth";
import {Router} from "@angular/router";

import firebase from "firebase/compat";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth = inject(Auth)
  private router = inject(Router)


  loginWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  registerWithEmail(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  async logOut(): Promise<void> {
    await this.auth.signOut();
    await this.router.navigate(['/login']);
  }

  async signInWithGoogle(): Promise<void> {
    // try {
    //   const result = await signInWithPopup(this.auth, new GoogleAuthProvider());
    //   console.log('Successfully logged in with Google:', result.user);
    //   this.router.navigate(['/movies']);
    // } catch (error) {
    //   console.error('Error logging in with Google:', error);
    //   // Handle error appropriately (e.g., display a message to the user)
    // }
  }


}
