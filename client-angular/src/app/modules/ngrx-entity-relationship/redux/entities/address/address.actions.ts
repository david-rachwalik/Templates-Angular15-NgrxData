import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Address } from './address.model';

export enum AddressActionTypes {
  UPSERT = '[Address] Upsert Address',
  UPDATE = '[Address] Update Address',
}

export const upsertAddress = createAction(
  AddressActionTypes.UPSERT,
  props<{ address: Address }>(),
);

export const updateAddress = createAction(
  AddressActionTypes.UPDATE,
  props<{ address: Update<Address> }>(),
);
