import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MasterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[MasterComponent]
})
export class MasterModule { }
