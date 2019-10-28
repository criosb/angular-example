  
import { Component, OnInit } from '@angular/core';
import { LibrosCargajsonService } from '../libros-cargajson.service';
import { LibrosSeleccionadosService } from '../libros-seleccionados.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  libros: Array<Object>;
  errorHttp: boolean;
  loading: boolean;

  constructor( public librosCargaJson: LibrosCargajsonService, public librosSeleccionados: LibrosSeleccionadosService ) { }

  ngOnInit() {
    this.loading = true;
    this.cargarLista();
  }

  cargarLista() {
    this.librosCargaJson.getLibros().subscribe(
      resp => { 
        this.libros = resp.body; 
        this.loading = false;
      },
      resp => { 
        console.log("error de conexión", resp);
        this.errorHttp = true;
      }
    )
  }

  agregarLibro(_libro) {
    this.librosSeleccionados.agregarLibros(_libro);
  }

  mostrarAutor(_libro) {
    alert(` ${_libro.titulo} fue escrito por ${_libro.autor} `);
  }

}
