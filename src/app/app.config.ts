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
      "projectId": "movies-app-3bde2",
      "appId": "1:173172836456:web:f89ffe214fc6d10db153dd",
      "storageBucket": "movies-app-3bde2.appspot.com",
      "apiKey": "AIzaSyA7jsH8fzGYPHq9FGr1MIrY5QHelY7dByE",
      "authDomain": "movies-app-3bde2.firebaseapp.com",
      "messagingSenderId": "173172836456"
    }))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"movies-app-3bde2","appId":"1:173172836456:web:f89ffe214fc6d10db153dd","storageBucket":"movies-app-3bde2.appspot.com","apiKey":"AIzaSyA7jsH8fzGYPHq9FGr1MIrY5QHelY7dByE","authDomain":"movies-app-3bde2.firebaseapp.com","messagingSenderId":"173172836456"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))
  ]
};
