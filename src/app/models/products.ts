
// export class Product {
//     constructor(
//       public id: string,
//       public name: string,
//       public description: string,
//       public imagePath: string,
//       public price: number,
//       public qty: number = 1,
//     ) { }
//   }
  
export interface Product
{
    id:string,
    name:string,
    description: string,
    imagePath: string,
    price: number,
    qty: number,
    type: string,
}
