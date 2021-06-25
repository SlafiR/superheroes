import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroRoutingModule } from './hero-routing.module';
// import { BrowserModule } from '@angular/platform-browser';
import { HeroComponent } from './hero.component';

@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule
  ],
  exports: [ HeroComponent ]
})
export class HeroModule { }
