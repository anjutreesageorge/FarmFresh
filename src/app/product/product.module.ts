import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AngularMaterialModule } from '../angular-material.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductSortComponent } from './product-sort/product-sort.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [ProductAddComponent, ProductSearchComponent, ProductShowComponent, ProductSortComponent, ProductListComponent],
  imports: [ CommonModule, ReactiveFormsModule, AngularMaterialModule, ProductRoutingModule, FormsModule],
  exports: [ProductSearchComponent],

})
export class ProductModule {}
