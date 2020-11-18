import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { SearchService } from './search.service';
import { AngularFirestore } from '@angular/fire/firestore';

interface GoogleBooksResponse {
  items: any[];
  kind: string;
  totalItems: number;
}

@Component({
  selector: 'app-findabook',
  templateUrl: './findabook.component.html',
  styleUrls: ['./findabook.component.scss']
})
export class FindabookComponent implements OnInit {
  
  searchText: string;
  books: any[];

  constructor(private firestore: AngularFirestore, private http: HttpClient/*, private searchService: SearchService*/) { }

  ngOnInit(): void {
    // this.books = this.searchService.booksResult
  }

  handleSearch(searchText) {
    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`)
      .toPromise()
      .then((response: GoogleBooksResponse) => {
      this.books = response.items;
      console.log(response)
    });
  }

  handleSave() {
    // This is an example of how to add a document to a collection in firestore
    // this.firestore.doc(`collection/${book.id}`).set(book, { merge: true });
  }
}
