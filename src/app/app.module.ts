// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { FindabookComponent } from './findabook/findabook.component';
import { BooklistComponent } from './findabook/booklist/booklist.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    BookshelfComponent,
    NavComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'findabook', component: FindabookComponent},
      {path: 'bookshelf', component: BookshelfComponent},
      {path: '', redirectTo: '/findabook', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
