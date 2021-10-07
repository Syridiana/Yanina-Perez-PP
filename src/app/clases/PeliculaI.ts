import { ActorI } from "./ActorI";

export interface PeliculaI {
    id: string | null | undefined;
    nombre: string | null | undefined;
    tipo: string | null | undefined;
    fechaEstreno: string | null | undefined;
    cantPublico: string | null | undefined;
    photoURL?: string | null | undefined;
    actor?: ActorI | null | undefined;
  }

  