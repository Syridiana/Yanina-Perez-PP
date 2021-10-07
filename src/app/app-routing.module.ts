import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculasModule } from './componentes/peliculas/peliculas.module';
import { ActorModule } from './componentes/actor/actor.module';

const routes: Routes = [
/*   { path: 'login', component: LoginComponent },
  { path: 'ingreso', component: LoginComponent }, */
  { path: '', redirectTo: 'busqueda', pathMatch: 'full' },
  { path: 'bievenido', component: BienvenidoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'peliculas', loadChildren: () => import('./componentes/peliculas/peliculas.module').then(m => m.PeliculasModule) },
  { path: 'actor', loadChildren: () => import('./componentes/actor/actor.module').then(m => m.ActorModule) }
];
const queryParams = {};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

