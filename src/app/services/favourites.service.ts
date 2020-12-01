import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  favourite$ = new BehaviorSubject([]);

  constructor(private db : AngularFirestore, public auth: AuthService) { 
    // When the Favourites Service is created, get the favourites from firebase
    // and store them in this service.. so that any child component which has a "FavouritesService"
    // injected into it's constructor, can use the favourites we have :)
    this.db.collection("favourites")
          .get()
          .subscribe(querySnapshot => {
            const favs = querySnapshot.docs.map(doc => doc.data());
            this.favourite$.next(favs);
          })
  }

  addToFavourites(book) {
    this.auth.user$.subscribe(user => {
      this.db.doc(`users/${user.uid}/favourites/${book.id}`)
            .set(book, {merge:true})
    });
  }

  removeFromFavourites(favourite) {
    // remove a favourite from firestore
    
  }

  
}
