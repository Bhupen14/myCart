import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductColumnComponent } from './components/product/product-column/product-column.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { SearchByTextPipe } from './pipe/search-by-text.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    FilterComponent,
    ProductColumnComponent,
    ProductListComponent,
    ProductDetailComponent,
    SearchByTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
