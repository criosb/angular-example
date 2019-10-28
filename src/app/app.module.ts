import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { AleatorioComponent } from './aleatorio/aleatorio.component';
import { ColoresComponent } from './colores/colores.component';
import { NgifExampleComponent } from './ngif-example/ngif-example.component';
import { NgswitchExampleComponent } from './ngswitch-example/ngswitch-example.component';
import { EstilosComponent } from './estilos/estilos.component';
import { NgforExampleComponent } from './ngfor-example/ngfor-example.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { DetalleComponent } from './detalle/detalle.component';

import { LibrosSeleccionadosService } from './libros-seleccionados.service';
import { LibrosCargajsonService } from './libros-cargajson.service';

const rutasApp: Routes = [
  { path:'', component: HomeComponent, pathMatch:'full' },
  { path:'lista-libros-2', component: NgforExampleComponent },
  { path:'lista-libros', component: ListaLibrosComponent },
  { path:'detalle', redirectTo:'lista-libros' },
  { path:'detalle/:libroId', component: DetalleComponent },
  { path:'colores', component: ColoresComponent},
  { path:'aleatorio', component: AleatorioComponent},
  { path:'estilos', component: EstilosComponent},
  { path:'if', component: NgifExampleComponent},
  { path:'about', component: AboutComponent},
  { path:'404', component: Error404Component},
  { path:'**', redirectTo:'404'}
]

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    AleatorioComponent,
    ColoresComponent,
    NgifExampleComponent,
    NgswitchExampleComponent,
    EstilosComponent,
    NgforExampleComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    Error404Component,
    ListaLibrosComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rutasApp),
    HttpClientModule
  ],
  providers: [LibrosSeleccionadosService, LibrosCargajsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
