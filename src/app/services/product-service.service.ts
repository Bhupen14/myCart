import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private setMode = '';
  private _filter = '';
  layoutModeEmitter = new EventEmitter<string>();
  searchBtTextEmmiter = new EventEmitter<string>();
  addtoCartemmiter = new EventEmitter<Product[]>();
  cartListEmmiter = new EventEmitter<Product[]>();

  private addToCartProduct:Product[]=[];

  private allProduct = {
    "products":
      [
        {
          "id": "A00001",
          "description":"Snow Boot Long ",
          "imagePath": "assets/images/boot001.png",
          "name":"Boot",
          "type":"Snow boot",
          "price":10,
          "qty":0         
        },
        {
          "id": "A00002",
          "description":"Snow Boot Short",
          "imagePath": "assets/images/boot002.png",
          "name":"Boot",
          "type":"Snow Boot",
          "price":10,
          "qty":0         
        },
        {
          "id": "A00003",
          "description":"Sneker Boot",
          "imagePath": "assets/images/boot003.png",
          "name":"Boot",
          "type":"Sneker",
          "price":10,
          "qty":0         
        },
        {
          "id": "A00004",
          "description":"beanie",
          "imagePath": "assets/images/hat001.png",
          "name":"beanie",
          "type":"winter",
          "price":10,
          "qty":0         
        },
        {
          "id": "A00005",
          "description":"hat 2",
          "imagePath": "assets/images/hat002.png",
          "name":"hat",
          "type":"winter",
          "price":10,
          "qty":0         
        },
        {
          "id": "A00006",
          "description":"hat 3",
          "imagePath": "assets/images/hat003.png",
          "name":"hat",
          "type":"winter",
          "price":10,
          "qty":0         
        },
        {
          "id": "A00007",
          "description":"white tshirt",
          "imagePath": "assets/images/tshirt-white.png",
          "name":"Tshirt",
          "type":"summer",
          "price":10,
          "qty":0         
        },
        {
          "id": "A00008",
          "description":"gray tshirt",
          "imagePath": "assets/images/tshirt-gray.png",
          "name":"Tshirt",
          "type":"summer",
          "price":10,
          "qty":0         
        },
        {
          "id": "A00009",
          "description":"yellow tshirt",
          "imagePath": "assets/images/tshirt-yellow.png",
          "name":"Tshirt",
          "type":"summer",
          "price":10,
          "qty":0         
        }
      ]
  }
  

  constructor() { }

  getallProduct() {
    return this.allProduct['products'];
    // console.log(this.allProduct);
  }

  getProductById(pId:string){

    return this.allProduct['products'].find((i: { id: string; }) => i.id === pId);

      // console.log(myProd);

  }
  setProductDisplayLayout(mode: string) {
    this.setMode = mode;
    this.layoutModeEmitter.emit(this.setMode);
    // console.log(mode);
  }

  getProductDisplayLayout() {
    // return this.setMode;
  }


  getFilter() {
    return this._filter;
  }

  setFilter(search: string) {
    this._filter = search
    this.searchBtTextEmmiter.emit(this._filter);

  }

  addToCart(addproduct:Product,qty:number){

    // console.log(qty);
    const searchItem = this.addToCartProduct.filter(list =>  list.id == addproduct.id);
    if(searchItem.length > 0 ){
      this.addToCartProduct[0].qty+=qty;
      }
     else{
      addproduct.qty = qty;
      this.addToCartProduct.push(addproduct);
     }
    // // productInCart ? productInCart.qty++ : this.addToCartProduct.push(addproduct);
    // console.log(this.addToCartProduct);
    this.addtoCartemmiter.emit(this.addToCartProduct);
 
  }

  

  getmycartList(){
      return this.addToCartProduct;
  }
  // myCartListEmmiter(){
  //   this.cartListEmmiter.emit(this.addToCartProduct);
  // }
}
