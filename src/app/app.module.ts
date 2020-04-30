import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CharacterComponent } from './character/character.component';
import { AdventuresComponent } from './adventures/adventures.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { StatsComponent } from './character/stats/stats.component';
import { StatsService } from './character/stats/stats.service';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterComponent,
    AdventuresComponent,
    EquipmentComponent,
    StatsComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
