import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FireService } from './../services/fire.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {

  public recoverForm: FormGroup;

  constructor(public auth: FireService) { }

  ngOnInit() {
    //reseteamos la variable que guarda el mensaje de error
    this.auth.userError="";

    //creamos la instancia del reactive form
    this.recoverForm = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.minLength(4),]),
    });
  }

}
