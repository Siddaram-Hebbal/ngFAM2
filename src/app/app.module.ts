//Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Main Component
import { AppComponent } from './app.component';

//Material Components
import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Other Components 
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

//Services 
import { FireService } from './services/fire.service';
import { RegisterComponent } from './register/register.component';
import { RecoverComponent } from './recover/recover.component';
import { ListUsersComponent } from './list-users/list-users.component';



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
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path:'inicio', component: HomeComponent },
      {path:'navbar', component: NavbarComponent},
      {path:'', redirectTo:'inicio', pathMatch: 'full' },
      {path:'**', component: NotFoundComponent}
    ])
  ],
  providers: [FireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
