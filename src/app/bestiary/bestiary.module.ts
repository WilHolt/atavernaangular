import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestiaryComponent } from './bestiary.component';

@NgModule({
  declarations: [BestiaryComponent],
  imports: [
    CommonModule
  ],
  exports:[BestiaryComponent]
})
export class BestiaryModule { }
