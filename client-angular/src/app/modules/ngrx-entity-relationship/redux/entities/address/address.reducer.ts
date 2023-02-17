import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import * as AddressActions from './address.actions';
import { Address } from './address.model';

export interface State extends EntityState<Address> {}

export const adapter: EntityAdapter<Address> = createEntityAdapter<Address>();

export const initialState: State = adapter.getInitialState();

// export function reducer(
//   state: State | undefined = initialState,
//   action: Action,
// ): State {
//   switch (action.type) {
//     case AddressActionTypes.UPSERT:
//       return adapter.upsertOne((<UpsertAddress>action).payload.address, state);
//     case AddressActionTypes.UPDATE:
//       return adapter.updateOne((<UpdateAddress>action).payload.address, state);
//   }

//   return state;
// }

// ----------------------------------------------------------------------------------------

// https://ngrx.io/guide/store/reducers
export const addressReducer = createReducer(
  initialState,
  on(AddressActions.upsertAddress, (state) => ({
    ...state,
  })),
  on(AddressActions.updateAddress, (state) => ({
    ...state,
  })),
);
