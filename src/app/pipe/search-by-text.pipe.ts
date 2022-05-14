import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/products';

@Pipe({
  name: 'searchByText'
})
export class SearchByTextPipe implements PipeTransform {

  transform(products: Product[], searchText: string): any[] {
    if (!products) { return []; }
    if (!searchText) { return products; }
    searchText = searchText.toLowerCase();
    return products.filter(it => {
      // searches based on name || description
      return it.name.toLowerCase().includes(searchText) || it.description.toLowerCase().includes(searchText);
    });
  }
}
