import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Here we import all the elements of angular material that we are going to use
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule],
})

export class MaterialModule { }
