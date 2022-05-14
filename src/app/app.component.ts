import { Component, OnChanges, OnInit } from '@angular/core';
import { Product } from './models/products';
import { ProductServiceService } from './services/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Shopping';
  cartItem! : Product[];

public popupStatus : boolean = false;
  constructor(private productService:ProductServiceService){
    this.productService.addtoCartemmiter.subscribe((addVal:Product[]) =>
    {
     if(addVal.length > 0){
          this.popupStatus = true;
          this.cartItem = addVal ;
      }
    })
  }


  ngOnInit(){
    

  }
  ngDoCheck(){
 
  }

  ngAfterContentChecked(){
 setTimeout(() => {
   this.popupStatus = false;
 }, 4000);


  }
}
