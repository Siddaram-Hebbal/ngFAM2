import { FireService } from './../services/fire.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(public auth: FireService) { }

  ngOnInit() {

    //vemos quien esta logeado
    this.auth.currentUser();

    //creamos la instancia del reactive form
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.minLength(4),]),
      password: new FormControl(null, [Validators.required,Validators.minLength(4),])
    });

    //reseteamos la variable que guarda el mensaje de error
    this.auth.userError="";
  }

}
