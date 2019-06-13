import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileModule } from './profile/profile.module';
import { CreateGameComponent } from './create-game/create-game.component';
import { EnterGameComponent } from './enter-game/enter-game.component';
import { MasterModule } from './master/master.module';
import { ItemsComponent } from './items/items.component';
import { ItemsModule } from './items/items.module';
import { BestiaryModule } from './bestiary/bestiary.module';
import { GrimoireComponent } from './grimoire/grimoire.component';
import { GrimoireModule } from './grimoire/grimoire.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    CreateGameComponent,
    EnterGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    MasterModule,
    ItemsModule,
    BestiaryModule,
    GrimoireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
