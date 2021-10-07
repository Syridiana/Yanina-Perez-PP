import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ActorComponent } from './actor.component';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';


@NgModule({
  declarations: [
    ActorComponent,
    ActorPeliculaComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule
  ]
})
export class ActorModule { }
