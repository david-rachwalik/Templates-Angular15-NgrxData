/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { isDevMode } from '@angular/core';
// import {
//   ActionReducer,
//   ActionReducerMap,
//   createFeatureSelector,
//   createSelector,
//   MetaReducer,
// } from '@ngrx/store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { ngrxEntityRelationshipReducer } from 'ngrx-entity-relationship';

import {
  productReducer,
  State as ProductState,
} from './entities/product/product.reducer';

// log all actions (https://ngrx.io/guide/store/metareducers)
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export interface State {
  products: ProductState;
}

export const reducers: ActionReducerMap<State> = {
  products: productReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode()
  ? [debug, ngrxEntityRelationshipReducer]
  : [ngrxEntityRelationshipReducer];
