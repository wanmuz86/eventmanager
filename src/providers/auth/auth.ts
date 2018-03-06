
import { Injectable } from '@angular/core';
import firebase from 'firebase';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor() {
    console.log('Hello AuthProvider Provider');
  }
  loginUser(email:string,password:string):Promise<any>{
  	return firebase.auth().signInWithEmailAndPassword(email,password)
  }

  signupUser(email:string,password:string):Promise<any>{
  	return firebase.auth().createUserWithEmailAndPassword(email,password).then((newUser)=>{
  		firebase.database().ref(`/userProfile/${newUser.id}/email`)
  		.set(email)
  	})
  	.catch(error=>{
  		console.log(error);
  		throw new Error(error)
  	})
  }
  logoutUser(): Promise<void>{
  	const userId: string = firebase.auth().currentUser.uid;
  	firebase
  	.database()
  	.ref(`/userProfile/${userId}`)
  	.off();
  	return firebase.auth().signOut();
  }
resetPassword(email:string): Promise<void> {
return firebase.auth().sendPasswordResetEmail(email);
}
}
