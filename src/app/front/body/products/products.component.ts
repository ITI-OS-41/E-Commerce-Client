import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../share/data.service';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // [x: string]: any;
  cart: any;
  products;
  filteredProducts;
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem('user-data')) {
      this.router.navigate(['home']);
    }

    this.dataService.currentCart.subscribe(
      (editCart) => (this.cart = editCart)
    ); //<= Always get current value!

    this.getProduct();
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);

    if (filterValue) {
      this.filteredProducts = this.products.filter((product) => {
        return product.pName.indexOf(filterValue.trim().toLowerCase()) > -1;
      });
    } else {
      this.filteredProducts = this.products;
    }
  }

  // Want to use async/await? Add the `async` keyword to your outer function/method.
  async getProduct() {
    try {
      const response = await axios.get('assets/data/products.json');
      console.log('response.data-', response.data);
      console.log('response.status-', response.status);
      // console.log('response.statusText-', response.statusText);
      // console.log('response.headers-', response.headers);
      // console.log('response.config-', response.config);
      this.products = response.data;
      this.filteredProducts = [...this.products];
    } catch (error) {
      console.error(error);
    }
  }

  add2cart(qty, product) {
    this.cart.products.push(product);
    this.cart.cart = this.cart.cart + qty;

    //--part Cart Summary
    //--set in data service
    let _price = product.pPriceSale ? product.pPriceSale : product.pPrice;
    this.cart.subTotal = this.cart.subTotal + _price;
    this.cart.grandTotal = this.cart.subTotal + this.cart.shippingCost;

    this.dataService.updateCart(this.cart);
    console.log('this.cart--', this.cart);
  }
  buynow() {
    this.router.navigate(['cart']);
  }
}
