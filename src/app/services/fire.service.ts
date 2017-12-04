import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';

@Injectable()
export class FireService {

  public usersList = [];
  public registerUserError = "";
  public loginUserError = "";
  

  constructor(public ruta: Router) { }

  showUsers(){
    firebase.firestore().collection("users").get()
    .then( res => {
      
      res.forEach( doc => {
        var obj = {};
        obj["id"] = doc.id;
        obj["name"] = doc.data().name;
        obj["role"] = doc.data().role;
        this.usersList.push(obj);
        console.log(this.usersList);
        // console.log(this.usersList);
      });
      
    })
    .catch( error => {
      console.log("Error al mostrar los usuarios, mensaje: "+ error.message);
    });

  }

  loginUser(){

  }

  registerUser(data){
    // si el formulario es valido procedemos a registrar al usuario
    if(data.valid){
      firebase.auth().createUserWithEmailAndPassword(data.value.email, data.value.password)
      .then(res => {
        this.ruta.navigateByUrl('/home');
        this.saveUser(data.value.name,data.value.role);        
      })
      .catch(error => {
        this.registerUserError = "The form is invalid, please check and try again, Error: "+error.message;
      });
    }
    // si el formulario no es valido mostramos el mensaje de error.
    else{
      this.registerUserError = "The form is invalid, please check and try again";
    }
  }

  saveUser(name, role){
    //con esta funcion guardamos el nombre y el rol de los usuarios para mostrarlo luego
    firebase.firestore().collection("users").add({
      name: name,
      role: role
    })
    .then( res => {
        console.log("Documento guardado con ID: "+ res.id);
    })
    .catch( error => {
        console.log("Error guardando el documento, mensaje: "+ error);
    }); 
  }

  recoverUser(){

  }

  deleteUser(){

  }

  
    

}
