//import { ProductService } from '@nodeart/productservice';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
//import {DbAbstractionLayer} from "@nodeart/dal";
import { NgModule } from '@angular/core';


/**
 * Component that represent a form to add new products to database
 */
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  /**
   * Form object
   */
  productForm: FormGroup;

  /**
   * Store categories
   */
  categories = [];

  /**
   * Store attributes
   */
  attributes = [];

  /**
   * Store tags
   */
  tags = [];

  /**
   * User attached attributes to product
   */
  addedAttributes = [];

  /**
   * User attached tags to product
   */
  addedTags = [];

  isCategorySelected = false;
  constructor(protected fb: FormBuilder) {

this.productForm = this.fb.group({
name: '',
price: '',
imageUrl: '',
category: '',
attributes: {},
tags: [],
description: ''
});

}

  ngOnInit() {
    this.getCategories();
  }

  /**
   * Add product to database
   */
  addProduct() {
  }

  /**
   * Attach attribute to product
   */
  addAttribute() {
    this.addedAttributes.push({
      id: '',
      childs: [],
      attrs: this.filterProps(this.attributes, this.addedAttributes)
    });
    console.log(this.addedAttributes);
  }

  /**
   * Attach tag to product
   */
  addTag() {
    this.addedTags.push({
      id: '',
      tags: this.filterProps(this.tags, this.addedTags)
    });
  }

  /**
   * Filter properties
   ** @param props
   ** @param addedProps
   */
  filterProps(props, addedProps) {
    return props.filter(prop => {
      let flag = true;
      for (let i = 0; i < addedProps.length; i++) {
        if (prop.id !== addedProps[i].id) {
          continue;
        } else {
          flag = false;
        }
      }
      if (flag) {
        return prop;
      }
    });
  }

  /**
   * Process check of attribute
   ** @param attr Attribute
   ** @param valueName Attribute name
   ** @param event
   */
  check(attr, valueName: string, $event) {
    if ($event.target.checked) {
      attr.childs.push(valueName);
    } else {
      attr.childs = attr.childs.filter(value => {
        if (value !== valueName) {
          return value;
        }
      });
    }
    console.log(attr);
  }

  /**
   * Remove attribute
   * @param index Index of attribute in array
   */
  removeAttribute(index) {
    this.addedAttributes.splice(index, 1);
  }

  /**
   * Remove tag
   * @param index Index of tagin array
   */
  removeTag(index) {
    this.addedTags.splice(index, 1);
  }

  searchAttrValues(attrId) {
    console.log(attrId);
    for (let i = 0; i < this.attributes.length; i++) {
      if (this.attributes[i].id === attrId) {
        return this.attributes[i].childs;
      }
    }
  }

  /**
   * Get tags by category
   ** @param event
   */
  getTags($event) {
  }

  /**
   * Get attributes by category
   * *@param event
   */
  getAttributes($event) {
  }

  /**
   * Get properties (attributes, tags)
   ** @param event
   */
  getProps($event) {
    this.getAttributes($event);
    this.getTags($event);
  }

  /**
   * Get categories
   */
  getCategories() {
      }
  }

