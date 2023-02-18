import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  Product,
  ProductService,
} from '../../redux/entities/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products$: Observable<Product[]> = of([]);
  productIds$: Observable<string[] | number[]> = of([]);
  total$: Observable<number> = of(0);

  constructor(private productService: ProductService) {}

  // called after component initialized and inputs set, but before view is rendered
  ngOnInit(): void {
    this.products$ = this.productService.getAll();
    this.productIds$ = this.productService.getIds();
    this.total$ = this.productService.getTotal();
  }

  // https://www.reddit.com/r/typescript/comments/efid2b/how_to_round_to_2_decimal_places_with_typescript
  roundTo(num: number, places: number): number {
    const factor = 10 ** places;
    return Math.round(num * factor) / factor;
  }

  createProduct() {
    const price: number = this.roundTo(Math.random() * 1000, 2);
    const product: Product = {
      id: new Date().getUTCMilliseconds(),
      name: 'Example Create',
      description: `example created at $${price.toFixed(2)}`,
      price,
    };
    this.productService.add(product);
  }

  // https://ngrx.io/guide/entity/adapter#entity-updates
  updateProduct(product: Product) {
    const price: number = this.roundTo(Math.random() * 1000, 2);
    this.productService.update(product.id, { price });
  }

  deleteProduct(id: number) {
    this.productService.remove(id);
  }
}
