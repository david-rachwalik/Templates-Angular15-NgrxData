import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as ProductActions from './product.actions';
import { Product } from './product.model';
// import { State as ProductState } from './product.reducer';
import * as fromProduct from './product.selectors';

export { Product } from './product.model';

// Use root 'Injectable' when service should be shared across the entire app
// @Injectable({
//   providedIn: 'root',
// })
// Use the 'providers' array in the module decorator to only be available within the context of the lazy-loaded module
@Injectable()
export class ProductService {
  // constructor(private store: Store<ProductState>) {}
  constructor(private store: Store) {}

  // --- Selection Methods ---

  // select the array of objects
  getAll(): Observable<Product[]> {
    return this.store.select(fromProduct.selectAll);
  }

  // select the total count
  getTotal(): Observable<number> {
    return this.store.select(fromProduct.selectTotal);
  }

  // select the array of ids
  getIds(): Observable<string[] | number[]> {
    return this.store.select(fromProduct.selectIds);
  }

  // select the dictionary of entities
  getEntities(): Observable<Dictionary<Product>> {
    return this.store.select(fromProduct.selectEntities);
  }

  // --- Actionable Methods ---

  add(product: Product): void {
    this.store.dispatch(ProductActions.createProduct({ product }));
  }

  // https://ngrx.io/guide/entity/adapter#entity-updates
  update(id: number, changes: Partial<Product>): void {
    this.store.dispatch(
      ProductActions.updateProduct({
        product: {
          id,
          changes,
        },
      }),
    );
  }

  remove(id: number): void {
    this.store.dispatch(ProductActions.deleteProduct({ id }));
  }
}
