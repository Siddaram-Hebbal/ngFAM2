import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class FireService {

  constructor( ) { }

  test(){
    firebase.auth().createUserWithEmailAndPassword("jesus@hotmail.com", "123456")
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });
  }

}
