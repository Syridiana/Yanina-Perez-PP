"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[89],{2089:(P,i,a)=>{a.r(i),a.d(i,{PeliculasModule:()=>v});var r=a(8583),s=a(906),o=a(7716);let u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-pelicula-alta"]],decls:2,vars:0,template:function(e,n){1&e&&(o.TgZ(0,"p"),o._uU(1,"pelicula-alta works!"),o.qZA())},styles:[""]}),t})();var p=a(8259),c=a.n(p),m=a(3587),d=a(3010);const h=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-peliculas"]],decls:2,vars:0,template:function(e,n){1&e&&(o.TgZ(0,"p"),o._uU(1,"peliculas works!"),o.qZA())},styles:[""]}),t})()},{path:"listado",component:(()=>{class t{constructor(e){this.datosApi=e,this.movieListId=[],this.imageUrl="",this.movieName=""}ngOnInit(){}chequearPelicula(e){this.pickedMovie.id==e?c().fire({icon:"success",title:"Great !",text:"Good Job",showConfirmButton:!1,timer:1500}):c().fire({icon:"error",title:"Too bad !",text:"That's wrong",showConfirmButton:!1,timer:1500}),this.pickMovie()}pickMovie(){this.random=Math.floor(Math.random()*(this.movieListId.length-1)),this.pickedMovie=this.movieListId[this.random],this.datosApi.obtenerFrames(this.pickedMovie.id).subscribe(e=>{const n=Math.floor(Math.random()*(e.backdrops.length-1));this.imageUrl="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/"+e.backdrops[n].file_path},e=>{console.log(e)})}compare(e,n){return e.name<n.name?-1:e.name>n.name?1:0}sortList(){this.movieListId.sort(this.compare)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(m.t))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-pelicula-listado"]],decls:1,vars:0,template:function(e,n){1&e&&o._UZ(0,"app-tabla-pelicula")},directives:[d.k],styles:[""]}),t})()},{path:"alta",component:u}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[s.Bz.forChild(h)],s.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[r.ez,f]]}),t})()}}]);