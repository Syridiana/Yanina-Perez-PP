import { Component, OnInit } from '@angular/core';
import { DBService } from 'src/app/servicios/db.service';
import { DetallePeliculaComponent } from '../../detalle-pelicula/detalle-pelicula.component';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {
  public listaActores:any;
  public actorSeleccionadoLista:any;
  public listaPeliculas:any;

  constructor(private DBService: DBService) { 
   this.DBService.loadAllActores().subscribe((res:any) => {
     this.listaActores = res;
   });
     }

  seleccionActor(actorId:any){
    this.DBService.findMovies(actorId);
    /* this.eventoSeleccionePeli.emit(this.pickedMovie); */
  }

  aceptarForm(){

  }
  ngOnInit(): void {
  }

}
