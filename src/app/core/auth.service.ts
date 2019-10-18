import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	
  private authState: Observable<firebase.User>
  private currentUser: firebase.User = null;

  constructor(public afAuth: AngularFireAuth){
  	this.authState = this.afAuth.authState;
  	this.authState.subscribe(user => {
  		if(user){
  			this.currentUser = user;
  		}else {
  			this.currentUser = null;
  		}
  	})
  }
  doFacebookLogin(){
   return new Promise<any>((resolve, reject) => {
     let provider = new firebase.auth.FacebookAuthProvider();
     this.afAuth.auth
     .signInWithPopup(provider)
     .then(res => {
       resolve(res);
     }, err => {
       console.log(err);
       reject(err);
     })
   })
}

  
}
