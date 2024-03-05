import {inject, Injectable} from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup
} from "@angular/fire/auth";
import {Router} from "@angular/router";
import firebase from "firebase/compat";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth = inject(Auth)
  private router = inject(Router)
  provider = new GoogleAuthProvider();


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

  signInWithGoogle() {
    const auth = getAuth();

    signInWithPopup(auth, this.provider).then((result) => {
      console.log(result)
      this.router.navigate(['/movies'])
    }).catch((error) => {
      console.log(error)
    });
  }


}
