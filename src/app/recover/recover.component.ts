import { FireService } from './../services/fire.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {

  constructor(public auth: FireService) { }

  ngOnInit() {
    //reseteamos la variable que guarda el mensaje de error
    this.auth.userError="";
  }

}
