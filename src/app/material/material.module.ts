import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Here we import all the elements of angular material that we are going to use
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
})

export class MaterialModule { }
