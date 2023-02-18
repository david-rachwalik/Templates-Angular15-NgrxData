import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Pizza } from './pizza.model';

export enum PizzaActionTypes {
  LOAD_SUCCESS = '[Pizza] Load success',
  CREATE = '[Pizza] Create',
  UPDATE = '[Pizza] Update',
  DELETE = '[Pizza] Delete',
}

export const loadPizzaSuccess = createAction(
  PizzaActionTypes.LOAD_SUCCESS,
  props<{ pizzas: Pizza[] }>(),
);

export const createPizza = createAction(
  PizzaActionTypes.CREATE,
  props<{ pizza: Pizza }>(),
);

export const updatePizza = createAction(
  PizzaActionTypes.UPDATE,
  props<{ pizza: Update<Pizza> }>(),
);

export const deletePizza = createAction(
  PizzaActionTypes.DELETE,
  props<{ id: string }>(),
);
