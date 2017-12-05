import { Component, OnInit } from '@angular/core';
import { FireService } from '../services/fire.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(public auth: FireService) { }

  ngOnInit() {
    this.auth.startLoad();
    this.auth.showUsers();
  }

  imprimir(id){
    console.log(id);
  }

}
