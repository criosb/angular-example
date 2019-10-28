import { Component, OnInit } from '@angular/core';
import { LibrosSeleccionadosService } from '../libros-seleccionados.service';

@Component({
  selector: 'app-ngfor-example',
  templateUrl: './ngfor-example.component.html',
  styleUrls: ['./ngfor-example.component.css']
})
export class NgforExampleComponent implements OnInit {

  libros:Array<Object>;

  constructor(public librosSeleccionados: LibrosSeleccionadosService) { 
    this.libros = [
      { id: 1, titulo: 'El retrato de Dorian Gray', autor: 'Oscar Wilde', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 2, titulo: 'Frankenstein', autor: 'Mary Shelley', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 3, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 4, titulo: 'Drácula', autor: 'Bram Stoker', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 5, titulo: 'El maravilloso mago de Oz', autor: 'L. Frank Baum', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 6, titulo: 'Don Quijote de la Mancha', autor: ' Miguel de Cervantes Saavedra', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 7, titulo: 'La máquina del tiempo', autor: 'H. G. Wells', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 8, titulo: 'El conde de Montecristo', autor: 'Alexandre Dumas', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 9, titulo: 'Mujercitas', autor: 'Louisa M. Alcott', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 10, titulo: 'La isla del tesoro', autor: 'Robert Louis Stevenson', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." }
    ];
  }

  mostrarAutor(_libro) {
    alert(` ${_libro.titulo} fue escrito por ${_libro.autor} `);
  }

  ngOnInit() {
  }

  agregarLibro(_libro) {
    this.librosSeleccionados.agregarLibros(_libro);
  }

}
