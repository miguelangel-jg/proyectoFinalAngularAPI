import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precioFormato',standalone:false,
})
export class PrecioFormatoPipe implements PipeTransform {
  transform(valor: any): string {
    return parseFloat(valor).toFixed(2) + ' €';
  }
}
