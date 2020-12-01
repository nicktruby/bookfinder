import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
  
  faSearch = faSearch;
  searchText: string;
  books: any[];
  
  constructor(private http: HttpClient) { }
  
  
  ngOnInit(): void {
    
  }

  handleSearch(searchText) {
    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`)
    .toPromise()
    .then((response: GoogleBooksResponse) => {
      this.books = response.items;
      console.log(response)
    });
  }

}
