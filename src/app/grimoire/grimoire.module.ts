import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrimoireComponent } from './grimoire.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GrimoireComponent],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports:[
    GrimoireComponent
  ]
})
export class GrimoireModule { }
