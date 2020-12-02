import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

import firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Used a behavior subject here instead of an observable so that not every component 
  // has to subscribe/unsbuscribe to get a value
  user$ = new BehaviorSubject(null); 

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    // 1. Listen for changes to the authstate (ie. is the user logged in or not)
    this.afAuth.authState.subscribe((authUser: any) => {
      if (authUser) {
        // User is logged in! Let's get the userDoc from firestore and push/next it onto the user$ observable/behaviorsubject
        this.afs.doc<User>(`users/${authUser.uid}`)
                .get()
                .toPromise()
                .then(userDoc => {
                  this.user$.next(userDoc.data());
                });
      } else {
        // This user is NOT logged in. Push null to our user$ observable/behaviorsubject
        this.user$.next(null);
      }
    })
  }

  async googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user)
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/'])
  }

  private updateUserData({ uid, email, displayName, photoURL } : User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`)

    const data = {
      uid,
      email,
      displayName,
      photoURL
    };

    return userRef.set(data, { merge: true })
  }
}
