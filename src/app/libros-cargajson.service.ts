import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosCargajsonService {

  fileUrl = 'assets/json/lista-de-libros.json';

  constructor( private http: HttpClient ) { 

  }

  getLibros(): Observable<HttpResponse<any>> {
    return this.http.get(this.fileUrl, { observe: 'response' }); 
  }
}
