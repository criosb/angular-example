import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LibrosCargajsonService } from '../libros-cargajson.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  libros: Array<Object>;
  libroId: number;
  libroSeleccionado: Object;
  
  constructor(private ruta: ActivatedRoute, public librosCargaJson: LibrosCargajsonService) {

  }

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      this.libroId = params['libroId'];
      this.encontrarLibro();
    })
  }

  filtroPorID(libro) {
    return libro.id == this;
  }
  encontrarLibro() {
    this.librosCargaJson.getLibros().subscribe(
      resp => { 
        this.libros = resp.body; 
        this.libroSeleccionado = this.libros.filter(this.filtroPorID, this.libroId)[0];
      }
    )
    
  }

}
