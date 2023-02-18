import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import * as PizzaActions from './pizza.actions';
import { Pizza } from './pizza.model';

export interface State extends EntityState<Pizza> {}

const defaultPizza: State = {
  ids: ['123'],
  entities: {
    '123': {
      id: '123',
      size: 'small',
    },
  },
};

export const adapter: EntityAdapter<Pizza> = createEntityAdapter<Pizza>();

// seed the initial state with some starter data
export const initialState: State = adapter.getInitialState(defaultPizza);

// ------------------------------------------------------------------------

// https://ngrx.io/guide/store/reducers
// https://ngrx.io/guide/entity/adapter
export const pizzaReducer = createReducer(
  initialState,
  // on(PizzaActions.updatePizza, (state) => ({
  //   ...state,
  // })),
  on(PizzaActions.loadPizzaSuccess, (state, { pizzas }) => {
    // return adapter.addMany(pizzas, state);
    return adapter.setAll(pizzas, state);
  }),
  on(PizzaActions.createPizza, (state, { pizza }) =>
    adapter.addOne(pizza, state),
  ),
  on(PizzaActions.updatePizza, (state, { pizza }) => {
    return adapter.updateOne(pizza, state);
  }),
  on(PizzaActions.deletePizza, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
);
