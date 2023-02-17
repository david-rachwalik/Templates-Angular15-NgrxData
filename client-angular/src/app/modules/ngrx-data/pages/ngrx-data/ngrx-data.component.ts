import { Component } from '@angular/core';
import { EntityCollectionService, EntityServices } from '@ngrx/data';
import { Observable } from 'rxjs';

// import { Product } from './product.model';
import { Product } from 'src/app/shared/redux/entities/product/product.model';

@Component({
  selector: 'app-ngrx-data',
  templateUrl: './ngrx-data.component.html',
  styleUrls: ['./ngrx-data.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
// export class NgrxDataComponent implements OnInit {
export class NgrxDataComponent {
  private productService: EntityCollectionService<Product>;
  products$: Observable<Product[]>;
  defaultProduct: Product = { id: -1, name: '', description: '', price: -1 };
  product: Product = this.defaultProduct;

  constructor(private entityServices: EntityServices) {
    this.productService =
      this.entityServices.getEntityCollectionService<Product>('Product');
    this.products$ = this.productService.entities$;
  }

  ngOnInit() {
    // this.products$ = this.productService.entities$;
    this.productService.getAll();
  }

  add() {
    this.productService.add(this.product);
    this.product = this.defaultProduct; // reset
  }

  edit(product: Product) {
    this.productService.update({ ...product });
  }

  remove(product: Product) {
    this.productService.delete(product.id);
  }
}
