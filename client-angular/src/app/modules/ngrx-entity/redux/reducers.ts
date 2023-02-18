import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import {
  pizzaReducer,
  State as PizzaState,
} from './entities/pizza/pizza.reducer';

export interface State {
  pizzas: PizzaState;
}

export const reducers: ActionReducerMap<State> = {
  pizzas: pizzaReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
