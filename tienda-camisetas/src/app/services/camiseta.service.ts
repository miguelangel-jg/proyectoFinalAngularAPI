import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Camiseta} from '../interfaces/i-camisetas';

const URL_BASE = "http://localhost:8000/api/camisetas"; 

@Injectable({
  providedIn: 'root'
})
export class CamisetaService {

  constructor(private http: HttpClient) { }

  // Método para obtener todas las camisetas
  obtenerCamisetas(): Observable<Camiseta[]> {
    return this.http.get<Camiseta[]>(URL_BASE);
  }
  getCamisetaById(id: string | null): Observable<any> {
    return this.http.get(`${URL_BASE}/${id}`);
  }
}
