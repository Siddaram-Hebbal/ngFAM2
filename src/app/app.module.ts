//Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Main Component
import { AppComponent } from './app.component';

//Material Components
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

//Services 
import { FireService } from './services/fire.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
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
