//Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Main Component
import { AppComponent } from './app.component';

//Other Components 
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverComponent } from './recover/recover.component';
import { ListUsersComponent } from './list-users/list-users.component';

//Services 
import { FireService } from './services/fire.service';

//Connection with Firebase
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC3TCDQt0tccAf9LaN-UOY95hKB_iMjKyw",
  authDomain: "ngfam2-1df64.firebaseapp.com",
  databaseURL: "https://ngfam2-1df64.firebaseio.com",
  projectId: "ngfam2-1df64",
  storageBucket: "ngfam2-1df64.appspot.com",
  messagingSenderId: "1013188344139"
};
firebase.initializeApp(config);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    RecoverComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'inicio', component: HomeComponent },
      {path:'users', component: ListUsersComponent},
      {path:'', redirectTo:'inicio', pathMatch: 'full' },
      {path:'**', component: NotFoundComponent}
    ])
  ],
  providers: [FireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
