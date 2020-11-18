import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})

export class BooklistComponent implements OnInit {
  
  @Input() books: object[];

  constructor() { }

  ngOnInit(): void {
  }

}
