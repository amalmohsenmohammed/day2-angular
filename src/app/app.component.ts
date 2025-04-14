import { Component } from '@angular/core';

// Importing the components to be used in the main app component
import { CategoryComponent } from './components/category/category.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-root',
  imports: [CategoryComponent,FooterComponent,NavbarComponent,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'applicationname';
}
