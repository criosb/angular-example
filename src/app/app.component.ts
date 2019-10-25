import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ejemplo1';
  color: string = "red";

  generateRandom(): string {
    return Math.floor(Math.random() * 256).toString(16);
  }

  colorHex(): string {
    return "#" + this.generateRandom() + this.generateRandom() + this.generateRandom();
  }
}
