// import { isDevMode } from '@angular/core';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
  Keys,
  LocalStorageConfig,
  localStorageSync,
} from 'ngrx-store-localstorage';

// import { GameSave } from './game/game-save.model';
import { gameSaveReducer, GameSaveState } from './game/game.reducer';
import { pizzaReducer, PizzaState } from './pizza/pizza.reducer';

export interface State {
  pizzas: PizzaState;
  gameSaves: GameSaveState;
}

// -------- Reducers --------

export const reducers: ActionReducerMap<State> = {
  pizzas: pizzaReducer,
  gameSaves: gameSaveReducer,
};

// -------- Meta Reducers --------

export function localStorageSyncReducer(
  reducer: ActionReducer<State>,
): ActionReducer<State> {
  const localStorageKeys: Keys = ['pizzas', 'gameSaves'];

  const localStorageConfig: LocalStorageConfig = {
    keys: localStorageKeys,
    rehydrate: true,
  };

  // return localStorageSync({ keys: ['pizzas'], rehydrate: true })(reducer);
  return localStorageSync(localStorageConfig)(reducer);
}

// export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];
