import { Component, OnInit } from '@angular/core';
import { CamisetaService } from '../services/camiseta.service';
import { Camiseta } from '../interfaces/i-camisetas';

@Component({
  selector: 'app-busqueda',
  standalone: false,
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent implements OnInit {
  cadena: string = '';
  camisetas: Camiseta[] = [];
  mensajeError: string | null = null;

  constructor(private camisetaService: CamisetaService) {}

  ngOnInit(): void {}

  buscarCamisetas(cadena: string): void {
    if (!cadena) {
      return;
    }

    this.camisetaService.buscarCamisetas(cadena).subscribe(
      (data: Camiseta[]) => {
        this.camisetas = data;
        this.mensajeError = null;
      },
      (error) => {
        console.error('Error al buscar camisetas:', error);
        this.mensajeError = 'No se encontraron camisetas del equipo: ' + cadena;
      }
    );
  }
}
