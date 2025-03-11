import { Component, OnInit } from '@angular/core';
import { CamisetaService} from '../services/camiseta.service';
import {Camiseta} from '../interfaces/i-camisetas';

@Component({
  selector: 'app-camisetas',
  templateUrl: './camisetas.component.html',
  styleUrls: ['./camisetas.component.css'],
  standalone: false
})
export class CamisetasComponent implements OnInit {
  camisetas: Camiseta[] = [];

  constructor(private camisetaService: CamisetaService) {}

  ngOnInit(): void {
    this.obtenerCamisetas();
  }

  obtenerCamisetas(): void {
    this.camisetaService.obtenerCamisetas().subscribe((data: Camiseta[]) => {
      this.camisetas = data;
    });
  }
}



