import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Product } from './product.model';

export enum ProductActionTypes {
  CREATE = '[Product] Create',
  UPDATE = '[Product] Update',
  DELETE = '[Product] Delete',
}

export const createProduct = createAction(
  ProductActionTypes.CREATE,
  props<{ product: Product }>(),
);

export const updateProduct = createAction(
  ProductActionTypes.UPDATE,
  props<{ product: Update<Product> }>(),
);

export const deleteProduct = createAction(
  ProductActionTypes.DELETE,
  props<{ id: number }>(),
);
