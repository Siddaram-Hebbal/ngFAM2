import { FireService } from './../services/fire.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  public registerForm: FormGroup;
  

  constructor(private auth: FireService) { }

  ngOnInit() {
    //creamos la instancia del reactive form
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      admin: new FormControl(null, Validators.required)
    });
  }

}
