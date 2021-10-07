import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { UserI } from '../clases/UserI';
import { PeliculaI } from '../clases/PeliculaI';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { ActorI } from '../clases/ActorI';


@Injectable({
  providedIn: 'root',
})
export class DBService {
  private actoresCollection: AngularFirestoreCollection<ActorI>;
  private nameCollectionDB = 'actores';

  private peliculasCollection: AngularFirestoreCollection<PeliculaI>;
  private nameCollectionDB_2 = 'peliculas';

  private usuariosCollection: AngularFirestoreCollection<UserI>;
  private nameCollectionDB_3 = 'usuarios';

  public currentUser!: UserI | null;
  public listaPuntajes: PeliculaI[] = [];
  public listaActores: ActorI[] = [];
  public usuarioId='';
  public actorId = '';
  public peliculaId = '';

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.actoresCollection = afs.collection<ActorI>(
      this.nameCollectionDB
    );

    this.peliculasCollection = afs.collection<PeliculaI>(
      this.nameCollectionDB_2
    );

    this.usuariosCollection = afs.collection<UserI>(
      this.nameCollectionDB_3
    );

    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });

    
  }

/*   loadAllActores() {
    return this.actoresCollection.valueChanges().pipe(
      map((actores: ActorI[]) => {
        this.listaActores = [];

        for (const actor of actores) {
          this.listaActores.push(actor);
        }

        return this.listaActores;
      })
    );
  } */

/*   async addPuntaje(puntaje: number) {
    try {
      const puntajes: PeliculaI = {
        id: this.currentUser?.id,
        userEmail: this.currentUser?.email,
        puntaje: puntaje,
        createdAt: new Date().getTime(),
        dateString: new Date().toLocaleTimeString()
      };

      return await this.puntajesCollection.add(puntajes);
    } catch (error:any) {
      throw new Error(error.message);
    }
  } */

  loadAllActores() {
    return this.actoresCollection.valueChanges() as Observable<ActorI[]>
  }

  async addActor(actorId: string, nombre: string, apellido:string, nacionalidad:string, edad: string) {
    try {
      const actor: ActorI = {
        id: actorId,
        nombre: nombre,
        apellido: apellido,
        nacionalidad: nacionalidad,
        edad: edad
      };

      return await this.actoresCollection.add(actor);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }

  async addPelicula(nombre: string, tipo:string, fechaEstreno:string, cantPublico: string, photoURL:string, actor:any) {
    try {
      const peli: PeliculaI = {
        id: this.afs.createId(),
        nombre: nombre,
        tipo: tipo,
        fechaEstreno: fechaEstreno,
        cantPublico: cantPublico,
        photoURL: photoURL,
        actor: actor, 
        actorId: actor.id
      };
      return await this.peliculasCollection.add(peli);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }


  async addUserCollection(email: string, username:string, photoURL:string, tipo: string) {
    try {
      const user: UserI = {
        uid: this.currentUser?.uid,
        displayName: username,
        email: email,
        photoURL: photoURL,
        tipo: tipo
      };

      return await this.usuariosCollection.add(user);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }


  async updatePuntaje(puntaje: number) {
    try {

      if(this.currentUser){
        let nuevoPuntaje=0;
        const docs = this.afs.collection<UserI>(
          this.nameCollectionDB_2).ref.where('email', '==', this.currentUser.email).get();
          (await docs).forEach((doc:any)=>{
            console.log(doc.data().puntaje);
            this.usuarioId = doc.id;
            nuevoPuntaje = doc.data().puntaje + puntaje;
          });
          await this.afs.collection<UserI>(
            this.nameCollectionDB_2).doc(`/${this.usuarioId}`).update({puntaje: nuevoPuntaje});
      }

 
    } catch (error:any) {
      throw new Error(error.message);
    }
  }


  async findMovies(actorId: string) {
    try {
        console.log(actorId)
        const docs = this.afs.collection<PeliculaI>(
          this.nameCollectionDB_2).ref.where('actorId', '==', actorId).get();
          (await docs).forEach((doc:any)=>{
            console.log(doc.data());
          });

    } catch (error:any) {
      throw new Error(error.message);
    }
  }

  

  

/*   public obtenerUsuarios() {
    return this.usuariosCollection.valueChanges() as Observable<UserI[]>;
  } */
}