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
      })
      .catch(error => {
        console.log(error.message)
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
