import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { AleatorioComponent } from './aleatorio/aleatorio.component';
import { ColoresComponent } from './colores/colores.component';
import { NgifExampleComponent } from './ngif-example/ngif-example.component';
import { NgswitchExampleComponent } from './ngswitch-example/ngswitch-example.component';
import { EstilosComponent } from './estilos/estilos.component';
import { NgforExampleComponent } from './ngfor-example/ngfor-example.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    AleatorioComponent,
    ColoresComponent,
    NgifExampleComponent,
    NgswitchExampleComponent,
    EstilosComponent,
    NgforExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
