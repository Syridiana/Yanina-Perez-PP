import { Component, Input, OnInit } from '@angular/core';
import { PeliSeleccionadaService } from 'src/app/servicios/peli-seleccionada.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
  @Input() movieRecibida:any;

  peliculaSeleccionada: any;

  constructor(private peliSeleccionada: PeliSeleccionadaService) {
    
   }
   

  ngOnInit(): void {
  }

}
