import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/clases/UserI';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DBService } from 'src/app/servicios/db.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  public formulario:FormGroup;
  public currentUser!: UserI | null;
  public listaUsuarios = new Array<UserI>();
  public tipoUsuarioActual:any;

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
     this.DBService.obtenerUsuarios().subscribe((res:any)=>{
       this.listaUsuarios = res;
      this.findUsuario(this.currentUser?.email);
     })
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

  findUsuario(usuarioMail:any){
    this.tipoUsuarioActual = this.listaUsuarios.find((res:any) => res.email == usuarioMail);
    this.tipoUsuarioActual = this.tipoUsuarioActual.tipo;
  }

  ngOnInit(): void {
  }

}
