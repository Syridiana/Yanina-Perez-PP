import { Component, OnInit } from '@angular/core';
import { DBService } from 'src/app/servicios/db.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public nacionalidadSeleccionada = "";
  public nombre="";
  public apellido ="";
  public edad="";

  constructor(private dbService: DBService) { }

  reciboPaisElegido($event:any){
    this.nacionalidadSeleccionada = $event;
  }

  agregarActor(){
    this.dbService.addActor(this.nombre , this.apellido, this.nacionalidadSeleccionada, this.edad);
  }

  onSubmit(){
    this.nacionalidadSeleccionada = "";
    this.nombre="";
    this.apellido ="";
    this.edad="";
  }
  ngOnInit(): void {
  }

}
