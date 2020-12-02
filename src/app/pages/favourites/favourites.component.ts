import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})

export class FavouritesComponent implements OnInit {

  books : any;
  authorArr : any[];
  filterText: string;
  filteredBooks : any;

  booksStream$: Observable<any>;

  constructor(private db : AngularFirestore, public favouritesSvc : FavouritesService, public authSvc: AuthService) { }

  ngOnInit(): void {
    this.favouritesSvc.getFavourites().subscribe(favourites => {
      this.books = favourites;
      this.filteredBooks = favourites;
      this.getAuthorsList()
    })      
  }
  
  getAuthorsList() {
    this.authorArr = [...new Set(this.books.map(book => {
      if(book.volumeInfo.authors[0]) {
        return book.volumeInfo.authors[0]
      }  
    }))]
  }
    
  handleFilter(filterText) {
    if(!filterText) this.filteredBooks = this.books
    else this.filteredBooks = this.books.filter(book => book.volumeInfo.authors[0] === filterText)
  }
  
}
  