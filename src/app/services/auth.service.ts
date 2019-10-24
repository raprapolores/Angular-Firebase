import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

	constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private router: Router,
  ) { }	

  // Sign in with Facebook
  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
        this.router.navigateByUrl("/");
    }).catch((error) => {
        console.log(error)
    })
  }
  
}
