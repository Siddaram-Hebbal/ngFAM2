import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Here we import all the elements of angular material that we are going to use
import {MatButtonModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material';



@NgModule({
  imports: [MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule],
})

export class MaterialModule { }
