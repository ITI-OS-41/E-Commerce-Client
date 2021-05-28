import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss'],
})
export class FeaturedProductComponent implements OnInit {
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
