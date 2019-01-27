
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
import {Categories} from '../categories';
import { ProductService } from '../product.service';


/**
 * Component that represent a form to add new products to database
 */
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  selected: Categories.VEG;
  categories = Categories.values();
  isLoading = false;
  productService: ProductService;

  ngOnInit() {

  }

  addProduct(addProductForm: NgForm) {
      if (addProductForm.invalid) {
        return;
      }
      this.isLoading = true;
      this.productService.addProduct();
    }

  }


