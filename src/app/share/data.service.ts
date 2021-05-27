import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  //---New for add product
  //-- add subTotal:0, shippingCost:1, grandTotal: 0   - shippingCost set 1 for default first
  public editCart: any = JSON.parse(localStorage.getItem('ecommerce-cart')) || {
    cart: 0,
    products: [],
    subTotal: 0,
    shippingCost: 1,
    grandTotal: 0,
  };

  public subject = new Subject<any>();

  private cartSource = new BehaviorSubject(this.editCart);
  currentCart = this.cartSource.asObservable();
  updateCart(item) {
    localStorage.setItem('ecommerce-cart', JSON.stringify(item));

    this.cartSource.next(item);
  }
}
