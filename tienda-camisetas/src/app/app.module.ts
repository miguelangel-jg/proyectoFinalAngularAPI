import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { CamisetaDetalleComponent } from './camiseta-detalle/camiseta-detalle.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { PrecioFormatoPipe } from './pipes/precio-formato.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CamisetasComponent,
    CamisetaDetalleComponent,
    BusquedaComponent,
    PaginaNoEncontradaComponent,
    PrecioFormatoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
