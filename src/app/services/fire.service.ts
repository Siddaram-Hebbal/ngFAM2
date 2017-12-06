import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';

@Injectable()
export class FireService {

  // Esto es para mostrar la barra de pre-cargando
  public loading = false;

  // Esto para recopilar los datos de los usuarios
  public usersList = [];
  
  // Esto para mostrar errores al registrarse o al logearse
  public userError = "";

  // Para mostrar el id
  public show_id = "";
  

  constructor(public ruta: Router) { }

  // FUNCIONES PRINCIPALES

  showUsers(){
    //reseteamos valores
    this.usersList = [];
    //buscamos las colecciones guardadas en usuarios
    firebase.firestore().collection("users").get()
    .then( res => {
      
      res.forEach( doc => {
        //para cada coleccion guardamos su id, nombre y role
        var obj = {};
        obj["id"] = doc.id;
        obj["name"] = doc.data().name;
        obj["role"] = doc.data().role;
        //lo agregamos a la lista de usuarios a mostrar
        this.usersList.push(obj);
      });
      //detenemos el icono spiner
      this.stopLoad();
      
    })
    .catch( error => {
      console.log("Error al mostrar los usuarios, mensaje: "+ error.message);
    });
    
  }

  loginUser(data){
     // si el formulario es valido procedemos logear al usuario
    if(data.valid){
      console.log("logeado");
      // firebase.auth().createUserWithEmailAndPassword(data.value.email, data.value.password)
      // .then(res => {
      //   this.ruta.navigateByUrl('/list-users');
      //   this.saveUser(data.value.name,data.value.role,res.uid);        
      // })
      // .catch(error => {
      //   this.registerUserError = "The form is invalid, please check and try again, Error: "+error.message;
      // });
    }
    // si el formulario no es valido mostramos el mensaje de error.
    else{
      this.userError = "The form is invalid, please check and try again";
    }
  }

  registerUser(data){
    // si el formulario es valido procedemos a registrar al usuario
    if(data.valid){
      firebase.auth().createUserWithEmailAndPassword(data.value.email, data.value.password)
      .then(res => {
        this.ruta.navigateByUrl('/list-users');
        this.saveUser(data.value.name,data.value.role,res.uid);        
      })
      .catch(error => {
        this.userError = "The form is invalid, please check and try again, Error: "+error.message;
      });
    }
    // si el formulario no es valido mostramos el mensaje de error.
    else{
      this.userError = "The form is invalid, please check and try again";
    }
  }

  saveUser(name, role, uid){
    //con esta funcion guardamos el nombre y el rol de los usuarios para mostrarlo luego
    firebase.firestore().collection("users").doc(uid).set({
      name: name,
      role: role
    })
    .then( res => {
        console.log(res);
    })
    .catch( error => {
        console.log(error);
    }); 
  }

  recoverUser(){
  }

  deleteUser(){
  }

  // FUNCIONES SECUNDARIAS
  showId(id){
    this.show_id = id;
  }

  startLoad(){
    this.loading = true;
  }

  stopLoad(){
    this.loading = false;
  }

  
    

}
