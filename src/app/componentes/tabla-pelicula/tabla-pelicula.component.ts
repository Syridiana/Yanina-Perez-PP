import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PeliculaI } from 'src/app/clases/PeliculaI';
import { APIService } from '../../servicios/apiservice.service';
import { PeliSeleccionadaService } from 'src/app/servicios/peli-seleccionada.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Output() eventoSeleccionePeli: EventEmitter<any> =  new EventEmitter<any>();

  random: any;
  pickedMovie: any;
  firstMovie: PeliculaI = {
    id: 694,
    nombre: 'The Shining',
    tipo: 'Terror',
    fechaEstreno: '1980-12-25',
    cantPublico: '3.000.000',
    photoURL: 'https://librolibertate.files.wordpress.com/2019/10/the-shining-1.jpg'
  };


  movieListId = new Array<PeliculaI>();

  imageUrl = '';
  movieName = "";

  constructor(private datosApi: APIService, private peliSeleccionada: PeliSeleccionadaService) {

    this.loadMovie(782);
    this.loadMovie(680);
    this.loadMovie(493922);
    this.loadMovie(550);
    this.obtenerLista(782);
    this.obtenerLista(493922);
    this.movieListId.push(this.firstMovie);
    this.pickedMovie = peliSeleccionada;
   }



  loadMovie(idStart: number) {
    
      this.datosApi.obtenerDatos((idStart)).subscribe(
        (pelicula: any) => {
              let peliActual: PeliculaI = {
                id: 694,
                nombre: 'The shining',
                tipo: 'Terror',
                fechaEstreno: '01/01/1990',
                cantPublico: '3.000.000',
                photoURL: 'https://librolibertate.files.wordpress.com/2019/10/the-shining-1.jpg'
              };
              peliActual.id = idStart;
              peliActual.nombre = pelicula.title;
              peliActual.cantPublico = pelicula.popularity;
              peliActual.fechaEstreno = pelicula.release_date;
/*               if(pelicula.genres[0].name === 'Horror'){
                peliActual.tipo = 'Terror';
              } else if(pelicula.genres[0].name == 'Comedy'){
                  peliActual.tipo = 'Comedia';
                } else if(pelicula.genres[0].name == 'Romantic'){
                  peliActual.tipo = 'Amor';
                } else {
                  peliActual.tipo = 'Otros';
                }
               */
              peliActual.tipo = pelicula.genres[0].name;
              peliActual.photoURL = 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/' + pelicula.backdrop_path;
              this.movieListId.push(peliActual);

         
        },
        error => { console.log(error) });

  }

  obtenerLista(id: number) {
      this.datosApi.obtenerListaGenero((id)).subscribe(
        (peliculas: any) => {

          peliculas.results.map((item:any) => {
            this.loadMovie(item.id);
          });
        },
        error => { console.log(error) });
  }

  compare(a: any, b: any) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  sortList(){
    this.movieListId.sort(this.compare);
  }

  seleccionoPeli(movieId:any){
    this.pickedMovie = this.movieListId.find(movie => movie.id === movieId);
    this.eventoSeleccionePeli.emit(this.pickedMovie);
  }

  ngOnInit(): void {
  }

}
