import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor(private db : AngularFirestore, public auth: AuthService) { }

  

  getFavourites() {
    // Observable Approach which returns an observable/stream of data
    const uid = this.auth.user$.value.uid;
    return this.db.collection(`users/${uid}/favourites`).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as any
        data.id = a.payload.doc.id
        return data
      })
    }))
  }

  addToFavourites(book) {
    const user = this.auth.user$.value;
    this.db.doc(`users/${user.uid}/favourites/${book.id}`).set(book, {merge:true})
  }

  removeFromFavourites(book) {
    // remove a favourite from firestore
    const user = this.auth.user$.value;
    this.db.doc(`users/${user.uid}/favourites/${book.id}`).delete()
  }
}
