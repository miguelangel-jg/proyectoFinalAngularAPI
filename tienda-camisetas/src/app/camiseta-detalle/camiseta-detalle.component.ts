import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CamisetaService } from '../services/camiseta.service';
import { Camiseta } from '../interfaces/i-camisetas';

@Component({
  selector: 'app-camiseta-detalle',
  standalone: false,
  templateUrl: './camiseta-detalle.component.html',
  styleUrls: ['./camiseta-detalle.component.css']
})
export class CamisetaDetalleComponent implements OnInit {
  camiseta!: Camiseta;

  constructor(private route: ActivatedRoute, private camisetaService: CamisetaService) { }

  ngOnInit(): void {
    //Coger el id de la url:
    let id = this.route.snapshot.paramMap.get('id');

      this.camisetaService.getCamisetaById(id).subscribe((data: Camiseta) => {
        this.camiseta = data;
        console.log('Camiseta obtenida:', this.camiseta);
      });

  }
}
