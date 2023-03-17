import { createFeatureSelector, createSelector } from '@ngrx/store';

// import { adapter, State as PizzaState } from './pizza.reducer';
import { State as ModuleState } from '../reducers';
import { adapter } from './pizza.reducer';

// https://ngrx.io/guide/store/selectors#selecting-feature-states
// AppState will have 'pizza' feature, then finds PizzaState
const featureName = 'ngrx-entity';
// export const getPizzaState = createFeatureSelector<PizzaState>('pizza');
export const getModuleState = createFeatureSelector<ModuleState>(featureName);

export const getPizzaState = createSelector(
  getModuleState,
  (state: ModuleState) => state.pizzas,
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors(getPizzaState);

export const selectPizzaIds = createSelector(getPizzaState, selectIds);
