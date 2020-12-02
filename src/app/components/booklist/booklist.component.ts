import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../services/auth.service';
import { FavouritesService } from '../../services/favourites.service';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})

export class BooklistComponent implements OnInit {
  
  @Input() books: object[];

  constructor(private db : AngularFirestore, public auth: AuthService, public favouriteSvc: FavouritesService) { 

  }


  ngOnInit(): void {

  }

}
