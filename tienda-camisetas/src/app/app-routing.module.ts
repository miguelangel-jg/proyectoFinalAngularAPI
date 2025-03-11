import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamisetasComponent } from './camisetas/camisetas.component';

const routes: Routes = [
  { path: '', component: CamisetasComponent },
  { path: 'camisetas/:id', component: CamisetasComponent } // Para ver detalles
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
