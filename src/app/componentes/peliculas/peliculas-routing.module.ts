import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';
import { PeliculasComponent } from './peliculas.component';


const routes: Routes = [
  { path: '', component: PeliculasComponent },
  { path: 'listado', component: PeliculaListadoComponent },
  { path: 'alta', component: PeliculaAltaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
