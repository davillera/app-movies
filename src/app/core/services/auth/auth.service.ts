import {inject, Injectable} from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup, signOut
} from "@angular/fire/auth";
import firebase from "firebase/compat";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import UserCredential = firebase.auth.UserCredential;
import {Router} from "@angular/router";


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

  getUserAuth() {
    return authState(this.auth)
  }


  // provider
  logInWithGoogleProvider() {

  }

}
