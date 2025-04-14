import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [
    {
      id: 1,
      image: 'assets/product1.jpeg',
      productName: 'Product 1',
      productPrice: 100,
      onSale: true
    },
    {
      id: 2,
      image: 'assets/product2.jpeg',
      productName: 'Product 2',
      productPrice: 200,
      onSale: false
    },
    {
      id: 3,
      image: 'assets/product3.jpeg',
      productName: 'Product 3',
      productPrice: 150,
      onSale: true
    },
    {
      id: 4,
      image: 'assets/product2.jpeg',
      productName: 'Product 4',
      productPrice: 300,
      onSale: false
    },
  ];

}
