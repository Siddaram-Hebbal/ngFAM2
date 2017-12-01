import { FireService } from './../services/fire.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
declare var $ :any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  public registerForm: FormGroup;

  constructor(private auth: FireService) { }

  ngOnInit() {
    // Inicializamos el select (necesario con materilize)
    $('select').material_select();

    //creamos la instancia del reactive form
    this.registerForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      role: new FormControl()
    });


  }

  mensaje(data){
    console.log(data);
  }

}
