import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculasModule } from './componentes/peliculas/peliculas.module';
import { ActorModule } from './componentes/actor/actor.module';
import { ActorAltaComponent } from './componentes/actor/actor-alta/actor-alta.component';
import { PeliculaAltaComponent } from './componentes/peliculas/pelicula-alta/pelicula-alta.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ingreso', component: LoginComponent },
  { path: '', redirectTo: 'bievenido', pathMatch: 'full' },
  { path: 'bievenido', component: BienvenidoComponent },
  { path: 'detalle', component: BusquedaComponent },
  { path: 'altaproducto', component: ActorAltaComponent },
  { path: 'abmcontainer', component: PeliculaAltaComponent },
  { path: 'peliculas', loadChildren: () => import('./componentes/peliculas/peliculas.module').then(m => m.PeliculasModule) },
  { path: 'actor', loadChildren: () => import('./componentes/actor/actor.module').then(m => m.ActorModule) }
];
const queryParams = {};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

