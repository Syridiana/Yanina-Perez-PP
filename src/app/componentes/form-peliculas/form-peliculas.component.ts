import { Component, Input, OnInit } from '@angular/core';
import { ActorAltaComponent } from '../actor/actor-alta/actor-alta.component';
import { DBService } from 'src/app/servicios/db.service';

@Component({
  selector: 'app-form-peliculas',
  templateUrl: './form-peliculas.component.html',
  styleUrls: ['./form-peliculas.component.css']
})
export class FormPeliculasComponent implements OnInit {

  public titulo="";
  public tipo="";
  public estreno="";
  public publico="";
  public url="";
  public idActor=100;
  public actor:any;
  
  constructor(private DBService: DBService) { 
   
  }

  agregarPelicula(){
    /* this.DBService.addActor(this.actor.nombre, this.actor.apellido, this.actor.nacionalidad, this.actor.edad); */
    this.DBService.addPelicula(this.titulo, this.tipo, this.estreno, this.publico, this.url, this.actor);
  }

  onSubmit(){

  }

  recibirActor($event:any){
    console.log(1);
    this.actor = $event;
    console.log(this.actor);
  }

  ngOnInit(): void {
  }

}
