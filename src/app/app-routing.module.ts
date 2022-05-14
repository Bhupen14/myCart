import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductColumnComponent } from './components/product/product-column/product-column.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"dashboard",component:HomeComponent},
  {path:"product",component:ProductComponent},
  {path:"product-column",component:ProductColumnComponent},
  {path:"cart",component:CartComponent},
  {path:"productDetail/:id",component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
