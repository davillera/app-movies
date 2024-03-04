import {inject, Injectable} from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from "@angular/fire/auth";
import firebase from "firebase/compat";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import UserCredential = firebase.auth.UserCredential;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth = inject(Auth)

  readonly authStatus$ = authState(this.auth)


  loginWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  registerWithEmail(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  logout() {

  }


  // provider
  logInWithGoogleProvider() {
    // const provider = new GoogleAuthProvider()
    // return signInWithPopup(this.auth, provider)
  }

}
