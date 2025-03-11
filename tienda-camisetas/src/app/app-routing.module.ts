import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { CamisetaDetalleComponent } from './camiseta-detalle/camiseta-detalle.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';


const routes: Routes = [
  { path: '', component: CamisetasComponent },
  { path: 'camisetas/:id', component: CamisetaDetalleComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
