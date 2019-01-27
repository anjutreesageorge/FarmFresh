import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {


  /**
   * RxJs Subject
   */
  inputSubject = new Subject<string>();

  /**
   * Searched products
   */
  products = [];

  /**
   * Name query for searching
   */
  @ViewChild('query') queryString;
  constructor(protected router: Router) { }


  ngOnInit() {
    /* this.inputSubject.debounceTime(500).subscribe(query => {
      this.productService.getProducts(query, 5).subscribe( data => {
        console.log(data.val());
        console.log(this.queryString.nativeElement.value.length);
        if (data.val() && data.val()['total'] > 0 && this.queryString.nativeElement.value.length > 0){
          console.log(data.val());
          this.products = data.val()['hits'].map(product => {
            product['_source']['id'] = product['_id'];
            return product['_source'];
          });
          console.log(this.products);
        } else {
          this.products = [];
        }
      });
    }); */
  }

  /**
   * On input name in text input
   * *@param {string} query name query
   */
  change(query) {
    if (query.length > 0) {
      this.inputSubject.next(query);
    } else {
      this.products = [];
    }
  }

  /**
   * On select product navigate to product page
   * *@param {string} productId product id
   */
  onSelect(productId) {
    this.router.navigate(['product', productId]);
    this.products = [];
    this.queryString.nativeElement.value = '';
  }

}
