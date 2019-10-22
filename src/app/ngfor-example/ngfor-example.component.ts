import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-example',
  templateUrl: './ngfor-example.component.html',
  styleUrls: ['./ngfor-example.component.css']
})
export class NgforExampleComponent implements OnInit {

  libros:Array<Object>;

  constructor() { 
    this.libros = [
      {id:1, titulo:'Da Vinci Code,The', autor:'Brown, Dan'},
      {id:2, titulo:'Harry Potter and the Deathly Hallows', autor:'Rowling, J.K.'},
      {id:3, titulo:'Harry Potter and the Philosopher\'s Stone', autor:'Rowling, J.K.'},
      {id:4, titulo:'Harry Potter and the Order of the Phoenix', autor:'Rowling, J.K.'},
      {id:5, titulo:'Fifty Shades of Grey', autor:'James, E. L.'},
      {id:6, titulo:'Harry Potter and the Goblet of Fire', autor:'Rowling, J.K.'},
      {id:7, titulo:'Harry Potter and the Chamber of Secrets', autor:'Rowling, J.K.'},
      {id:8, titulo:'Harry Potter and the Prisoner of Azkaban', autor:'Rowling, J.K.'},
      {id:9, titulo:'Angels and Demons', autor:'Brown, Dan'},
      {id:10, titulo:'Harry Potter and the Half-blood Prince:Children\'s Edition', autor:'Rowling, J.K.'}
    ];
  }

  mostrarAutor(_libro) {
    alert(` ${_libro.titulo} fue escrito por ${_libro.autor} `);
  }

  ngOnInit() {
  }

}
