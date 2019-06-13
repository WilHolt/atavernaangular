import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestiaryComponent } from './bestiary.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BestiaryComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[BestiaryComponent]
})
export class BestiaryModule { }
