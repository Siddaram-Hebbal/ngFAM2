//This module is used to import all material modules necessaries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Here we import all the elements of angular material that we are going to use
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material';



@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule],
})

export class MaterialModule { }
