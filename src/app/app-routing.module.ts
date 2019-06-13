import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { MasterComponent } from './master/master.component';
import { ItemsComponent } from './items/items.component';
import { BestiaryComponent } from './bestiary/bestiary.component';
import { GrimoireComponent } from './grimoire/grimoire.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'perfil',
    component:ProfileComponent
  },
  {
    path:'mestre',
    component:MasterComponent,
  
  },  
  {
    path:'bestiario',
    component:BestiaryComponent
  },
  {
    path:'grimorio',
    component:GrimoireComponent
  },
  {
    path:'perfil',
    component:ProfileComponent
  },
  {
    path:'perfil',
    component:ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
