import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
/* import { BrowserModule } from '@angular/platform-browser'; */
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes.routing.module';


// aksdjhfasjkdhfkajshdfasdf ctrl + k+c ///// shift+alt+a

@NgModule({
  declarations: [
    HeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  exports: [ HeroesComponent ]
})
export class HeroesModule { }
