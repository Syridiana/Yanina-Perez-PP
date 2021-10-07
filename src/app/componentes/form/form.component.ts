import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DBService } from 'src/app/servicios/db.service';
import { ActorI } from 'src/app/clases/ActorI';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() inAltaActor:boolean;
  @Output() actorCargado: EventEmitter<any> =  new EventEmitter<any>();
  

  public nacionalidadSeleccionada = "";
  public nombre="";
  public apellido ="";
  public edad="";
  public actorId="";

  constructor(private dbService: DBService, private afs: AngularFirestore) {
    this.inAltaActor = true;
   }

  reciboPaisElegido($event:any){
    this.nacionalidadSeleccionada = $event;
  }

  agregarActor(){
    this.actorId = this.afs.createId();
    this.actorCargado.emit({'id': this.actorId, 'nombre': this.nombre , 'apellido': this.apellido, 'nacionalidad': this.nacionalidadSeleccionada,
    'edad': this.edad});
    this.dbService.addActor(this.actorId, this.nombre , this.apellido, this.nacionalidadSeleccionada, this.edad);

  }

  onSubmit(){
/*     this.nacionalidadSeleccionada = "";
    this.nombre="";
    this.apellido ="";
    this.edad=""; */
  }
  ngOnInit(): void {
  }

}
