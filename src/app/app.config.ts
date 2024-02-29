import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {MessageService} from "primeng/api";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    MessageService,
    importProvidersFrom(
      HttpClientModule,
      BrowserModule,
      BrowserAnimationsModule
    ),
    provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({
      "projectId": "movie-app-c80bc",
      "appId": "1:698072277782:web:1e6ac3365d6ff7bb62e637",
      "databaseURL": "https://movie-app-c80bc-default-rtdb.firebaseio.com",
      "storageBucket": "movie-app-c80bc.appspot.com",
      "apiKey": "AIzaSyCBWzn03UE29Mu0xhOHMTnlCW1mVrfAjgs",
      "authDomain": "movie-app-c80bc.firebaseapp.com",
      "messagingSenderId": "698072277782"
    }))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))
  ]
};
