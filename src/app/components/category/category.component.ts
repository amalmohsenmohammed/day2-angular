import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories: Category[] = [
    {
      id: 1,
      name: 'Perfume',
      image: 'assets/category1.jpeg',
      description: "description of perfume"
    },
    {
      id: 2,
      name: 'Clothes',
      image: 'assets/category2.jpeg',
      description: "description of clothes"
    }
    ,
    {
      id: 3,
      name: 'electronics',
      image: 'assets/category3.jpeg',
      description: "description of electronics"
    }
  ];
}
