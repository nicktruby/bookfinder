import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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

  constructor(private db : AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection("favourites").get().subscribe(querySnapshot => {
      this.books = querySnapshot.docs.map(doc => doc.data());
      this.filteredBooks = querySnapshot.docs.map(doc => doc.data());
      this.authorArr = [...new Set(this.books.map(book => book.volumeInfo.authors[0]))]
    });
  };
    
  handleFilter(filterText) {
    if(!filterText) this.filteredBooks = this.books
    else this.filteredBooks = this.books.filter(book => book.volumeInfo.authors[0] === filterText)
  }
  
}
