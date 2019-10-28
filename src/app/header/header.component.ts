import { Component, OnInit } from '@angular/core';
import { LibrosSeleccionadosService } from '../libros-seleccionados.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public librosSeleccionados: LibrosSeleccionadosService) { }

  ngOnInit() {
  }

}
