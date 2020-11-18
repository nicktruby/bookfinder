import { Component, OnInit } from '@angular/core';

// Note: Angularfire wasn't injecting firestore (it's undefined?) so I've reverted to using firebase library;
// import * as firebase from 'firebase'

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {

  books : object[];

  constructor() { }

  ngOnInit(): void {
    // const firestore = firebase.default.firestore();
    // console.log(this.books)
    // firestore.collection("bookshelf").get().then(response => {
    //   const data = response.docs.map(doc => doc.data())
    // });
  }
}
