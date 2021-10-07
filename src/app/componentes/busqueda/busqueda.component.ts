import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  
  @Input() peliRecibida:any;

  peliActual:any;
  paisActual:any;
  public paisesLista= [{'name': 'Estados Unidos', 'URL': 'https://flagcdn.com/us.svg'},
  {'name': 'Australia', 'URL': 'https://flagcdn.com/au.svg'},
  {'name': 'Francia', 'URL': 'https://flagcdn.com/fr.svg'},
  {'name': 'Alemania', 'URL': 'https://flagcdn.com/de.svg'},
  {'name': 'Gran Bretaña', 'URL': 'https://flagcdn.com/gb.svg'},
  {'name': 'Canada', 'URL': 'https://flagcdn.com/ca.svg'}
];

  constructor() {
    
   }

   cambiarPeli(peli:any){
    this.peliActual = peli;
    this.findPais(peli.pais);
   }

   findPais(pais:any){
    this.paisActual = this.paisesLista.find(paisPasado => paisPasado.name === pais);
   }

  ngOnInit(): void {
  }

}
