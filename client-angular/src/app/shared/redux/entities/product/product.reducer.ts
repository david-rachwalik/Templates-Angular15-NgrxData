import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import * as ProductActions from './product.actions';
import { Product } from './product.model';

export interface State extends EntityState<Product> {}

const defaultProduct: State = {
  ids: [123],
  entities: {
    123: {
      id: 123,
      name: 'Example Product 01',
      description: 'The first product example',
      price: 360,
    },
  },
};

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

// seed the initial state with some starter data
export const initialState: State = adapter.getInitialState(defaultProduct);

// ------------------------------------------------------------------------

// https://ngrx.io/guide/store/reducers
// https://ngrx.io/guide/entity/adapter
export const productReducer = createReducer(
  initialState,
  // on(ProductActions.updateProduct, (state) => ({
  //   ...state,
  // })),
  on(ProductActions.createProduct, (state, { product }) => {
    return adapter.addOne(product, state);
  }),
  on(ProductActions.updateProduct, (state, { product }) => {
    return adapter.updateOne(product, state);
  }),
  on(ProductActions.deleteProduct, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
);
