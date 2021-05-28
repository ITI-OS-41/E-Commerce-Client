import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-product',
  templateUrl: './recent-product.component.html',
  styleUrls: ['./recent-product.component.scss'],
})
export class RecentProductComponent implements OnInit {
  products: any = [
    {
      img: 'https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/1622117970_banner-2.jpg',
      title: 'product 1',
      price: 22.99,
    },
    {
      img: 'https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/1622117970_banner-3.jpg',
      title: 'product 1',
      price: 22.99,
    },
    {
      img: 'https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/1622117971_banner-5.jpg',
      title: 'product 3',
      price: 10.99,
    },
    {
      img: 'https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/1622117971_banner-4.jpg',
      title: 'product 4',
      price: 11.001,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
