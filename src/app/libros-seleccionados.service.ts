import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosSeleccionadosService {

  libros: Array<Object>;

  constructor() {
    this.libros=[];
  }
  
  agregarLibros(_nuevoLibro) {
    this.libros.push(_nuevoLibro);
  }

  mostrarlibros() {
    if (this.libros.length > 0) {
      return this.libros;
    } else {
      return false;
    }
  }
}
