import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';

@Injectable()
export class FireService {

  //password for delete
  public deletePass = "";

  // Para manejar al usuario
  public actualUser = "";
  public actualUserId = "";

  // Esto es para mostrar la barra de pre-cargando
  public loading = false;

  // Esto para recopilar los datos de los usuarios
  public usersList = [];
  
  // Esto para mostrar errores al registrarse o al logearse
  public userError = "";

  // Para mostrar el id
  public show_id = "";

  //para restablecer password
  public emailRecover = "";
  

  constructor(public ruta: Router) { }

  // FUNCIONES PRINCIPALES
//para mostrar la lista de usuarios
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
//para logear al usuario
  loginUser(data){
     // si el formulario es valido procedemos logear al usuario
    if(data.valid){
      firebase.auth().signInWithEmailAndPassword(data.value.email, data.value.password)
      .then ( res =>{
        this.currentUser();        
      })
      .catch( error => {
        this.userError = "The form is invalid, please check and try again, Error: "+error.message;
      });
    }
    // si el formulario no es valido mostramos el mensaje de error.
    else{
      this.userError = "The form is invalid, please check and try again";
    }
  }
//para saber si alguien esta logeado
  currentUser(){
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        this.actualUser = user.email;
        this.actualUserId = user.uid;
      } else {this.actualUser = "";}
    });
  }
//para registrar nuevos usuarios
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
//para almacenar datos de cada usuario nuevo que se registra
  saveUser(name, role, uid){
    //con esta funcion guardamos el nombre y el rol de los usuarios para mostrarlo luego
    firebase.firestore().collection("users").doc(uid).set({
      name: name,
      role: role
    })
    .then( res => {console.log("Data saved successfully!");
    })
    .catch( error => {console.log(error);
    }); 
  }
//para cerrar session
  logoutUser(){
    firebase.auth().signOut()
    .then(res => {
      this.userError = "";
    })
    .catch(error => {
      this.userError = error.message;
    });
  }
//para recuperar el password en caso de olvido
  recoverUser(){
    firebase.auth().sendPasswordResetEmail(this.emailRecover)
    .then(res => {
      this.ruta.navigateByUrl('/recover-message');
    })
    .catch(error => {
      this.userError = "The form is invalid, please check and try again, Error: "+error.message;
    });
  }
//para eliminar un usuario
  deleteUser(){
    firebase.auth().currentUser.delete()
    .then(res => {
      //redireccionamos a home
      console.log("User deleted!")
      this.ruta.navigateByUrl('/list-users');
    })
    .catch(error => {
      console.log("error when try to deleted");
    });
  }
//para eliminar los datos de un usuario
  deleteDataUser(){
    firebase.firestore().collection("users").doc(this.actualUserId).delete()
    .then(res => {
      //eliminamos al usuario
      console.log("Data deleted!");
      this.deleteUser();
    })
    .catch(error => {
        console.error("Error removing document: ", error);
    });
  }
//para confirmar que desea eliminar un usuario
  deleteUserConfirm(){
    //confirmamos que sabe el password
    firebase.auth().signInWithEmailAndPassword(this.actualUser, this.deletePass)
    .then ( res =>{
      //llamamos a la funcion deleteDataUser que a su vez llamara a deleteUser
      this.deleteDataUser();
    })
    .catch( error => {
      this.userError = "The form is invalid, please check and try again, Error: "+error.message;
    });

  }
  // FUNCIONES SECUNDARIAS
  showId(id){this.show_id = id;}
  startLoad(){this.loading = true;}
  stopLoad(){this.loading = false;}
}