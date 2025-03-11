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
  // Cambiar la búsqueda para que utilice POST
  buscarCamisetas(cadena: string): Observable<Camiseta[]> {
    // Enviar una solicitud POST con el parámetro nombre_equipo en el cuerpo de la solicitud
    return this.http.post<Camiseta[]>(`${URL_BASE}/search`, { nombre_equipo: cadena });
  } 
}
