import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { User } from './user.model';

export enum UserActionTypes {
  UPSERT = '[User] Upsert User',
  UPDATE = '[User] Update User',
}

export const upsertUser = createAction(
  UserActionTypes.UPSERT,
  props<{ user: User }>(),
);

export const updateUser = createAction(
  UserActionTypes.UPSERT,
  props<{ user: Update<User> }>(),
);
