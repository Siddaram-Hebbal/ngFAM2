import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class FireService {

  public registerUserError = "";
  public loginUserError = "";

  constructor(public ruta: Router) { }

  showUsers(){

  }

  loginUser(){

  }

  registerUser(data){
    // si el formulario es valido procedemos a registrar al usuario
    if(data.valid){
      firebase.auth().createUserWithEmailAndPassword(data.value.email, data.value.password)
      .then(res => {
        this.ruta.navigateByUrl('/home');
            firebase.firestore().collection("users").add({
                name: data.value.name,
                role: data.value.role
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            }); 
      })
      .catch(error => {
        this.registerUserError = "The form is invalid, please check and try again, Error: "+error.message;
      });
    }else{
      this.registerUserError = "The form is invalid, please check and try again";
    }
  }

  recoverUser(){

  }

  deleteUser(){

  }

}
