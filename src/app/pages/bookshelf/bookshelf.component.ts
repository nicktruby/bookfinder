import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {

  books : any;
  authorArr : any[];
  filterText: string;
  filteredBooks : any;

  constructor(private db : AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection("bookshelf").get().subscribe(querySnapshot => {
      this.books = querySnapshot.docs.map(doc => doc.data());
      this.filteredBooks = querySnapshot.docs.map(doc => doc.data());
      this.authorArr = [...new Set(this.books.map(book => book.volumeInfo.authors[0]))]
      console.log(this.authorArr);
      
    });
  };
    
  handleFilter(filterText) {
    if(!filterText) this.filteredBooks = this.books
    else this.filteredBooks = this.books.filter(book => book.volumeInfo.authors[0] === filterText)
  }
  
}
