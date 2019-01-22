import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AngularMaterialModule } from '../angular-material.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [ProductAddComponent],
  imports: [ CommonModule, ReactiveFormsModule, AngularMaterialModule, ProductRoutingModule, FormsModule]
})
export class ProductModule {}
