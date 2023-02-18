import { createFeatureSelector } from '@ngrx/store';

import { adapter, State as ProductState } from './product.reducer';
// import { State as AppState } from '../..';
// import { adapter } from './product.reducer';

// https://ngrx.io/guide/store/selectors#selecting-feature-states
// AppState will have 'product' feature, then finds ProductState
export const getProductState = createFeatureSelector<ProductState>('products');

// Alternative is StoreModule.forFeature('root', reducers) after forRoot

// export const getRootState = createFeatureSelector<AppState>('root');

// export const getProductState = createSelector(
//   getRootState,
//   (state: AppState) => state.products,
// );

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors(getProductState);
