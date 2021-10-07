import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Output() emisionPais: EventEmitter<any> =  new EventEmitter<any>();


  public paisesLista= [{'name': 'Estados Unidos', 'URL': 'https://flagcdn.com/us.svg'},
  {'name': 'Australia', 'URL': 'https://flagcdn.com/au.svg'},
  {'name': 'Francia', 'URL': 'https://flagcdn.com/fr.svg'},
  {'name': 'Alemania', 'URL': 'https://flagcdn.com/de.svg'},
  {'name': 'Gran Bretaña', 'URL': 'https://flagcdn.com/gb.svg'},
  {'name': 'Canada', 'URL': 'https://flagcdn.com/ca.svg'}
]

public paisElegido:any;

  constructor() { }

  cargarPais(event:any){
    this.paisElegido = event.target.title;
    this.emisionPais.emit(this.paisElegido);
  }



  ngOnInit(): void {
  }

}
