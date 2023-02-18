import { createFeatureSelector } from '@ngrx/store';

import { adapter, State as ProductState } from './product.reducer';

// https://ngrx.io/guide/store/selectors#selecting-feature-states
// AppState will have 'product' feature, then finds ProductState
export const getProductState = createFeatureSelector<ProductState>('products');

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors(getProductState);
