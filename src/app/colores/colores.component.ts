import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  colorLocal:String;
  constructor() { }

  ngOnInit() {
  }

  generateRandom():String {
    return Math.floor(Math.random()*256).toString(16);
  }

  colorHex():String {
    this.colorLocal = "#"+this.generateRandom()+this.generateRandom()+this.generateRandom();
    return this.colorLocal;
  }

}
