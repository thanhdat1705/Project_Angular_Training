import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment, firebaseConfig } from './environments/environment';
import firebase from "firebase/app";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  // firebase.initializeApp(firebaseConfig);
  // console.log("ahiih main.ts");
  // console.log("firebase -- " + firebase.initializeApp(firebaseConfig));
