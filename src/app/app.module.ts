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
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
