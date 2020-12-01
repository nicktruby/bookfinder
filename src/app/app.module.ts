// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BooklistComponent } from './components/booklist/booklist.component';
// Pages
import { FindabookComponent } from './pages/findabook/findabook.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBiUio0iS3OgjZUmb4qTSzjLRHIizJrjUo",
  authDomain: "bookfinder-a4792.firebaseapp.com",
  databaseURL: "https://bookfinder-a4792.firebaseio.com",
  projectId: "bookfinder-a4792",
  storageBucket: "bookfinder-a4792.appspot.com",
  messagingSenderId: "779808624466",
  appId: "1:779808624466:web:982c622e5bd00672af348b"
};

@NgModule({
  declarations: [
    AppComponent,
    FindabookComponent,
    BooklistComponent,
    FavouritesComponent,
    NavComponent,
    PageNotFoundComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    RouterModule.forRoot([
      {path: 'findabook', component: FindabookComponent},
      {path: 'favourites', component: FavouritesComponent},
      {path: '', redirectTo: '/findabook', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
