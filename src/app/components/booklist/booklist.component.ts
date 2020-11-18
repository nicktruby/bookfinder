import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})

export class BooklistComponent implements OnInit {
  
  @Input() books: object[];
  
  constructor(private db : AngularFirestore) { }

  ngOnInit(): void {
  }

  handleSave = book => {
    this.db.doc(`bookshelf/${book.id}`).set(book, {merge:true})
  }
}
