import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/clases/UserI';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DBService } from 'src/app/servicios/db.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  public formulario:FormGroup;
  public currentUser!: UserI | null;
  public pais = "";

  constructor(private afAuth: AngularFireAuth, private fb:FormBuilder, private DBService:DBService) {
    this.formulario = fb.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio:['', Validators.required],
      stock :['', Validators.required],
      paisOrigen:['', Validators.required],
      comestible:[false, Validators.required],
    });
    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });


   }

   aceptarForm(){
    this.DBService.addProducto(this.formulario.value.codigo, 
      this.formulario.value.descripcion, 
      this.formulario.value.precio, 
      this.formulario.value.stock,
      this.formulario.value.paisOrigen,
      this.formulario.value.comestible );
  }

  cargarPais($event:any){
    this.pais=$event;
  }

  ngOnInit(): void {
  }

}
