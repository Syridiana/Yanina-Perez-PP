import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  
  @Input() peliRecibida:any;

  peliActual:any;

  constructor() {
    
   }

   cambiarPeli(peli:any){
    this.peliActual = peli;
   }

  ngOnInit(): void {
  }

}
