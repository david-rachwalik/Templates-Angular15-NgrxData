import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { GameSave } from './game-save.model';
import * as GameActions from './game.actions';

// export interface GameState {
//   saveState?: SaveState;
// }

export interface State extends EntityState<GameSave> {}
export { State as GameSaveState };

// const defaultGame: State = {
//   ids: ['1'],
//   entities: {
//     '1': {
//       id: '1',
//       playerName: 'Player One',
//       playerLevel: 1,
//     },
//   },
// };

export const adapter: EntityAdapter<GameSave> = createEntityAdapter<GameSave>();

// seed the initial state with some starter data
// export const initialState: State = adapter.getInitialState(defaultGame);
export const initialState: State = adapter.getInitialState({});

// ------------------------------------------------------------------------

export const gameSaveReducer = createReducer(
  initialState,
  // {},
  // on(GameActions.loadGameSuccess, (state, { games }) => games),
  on(GameActions.loadGameSuccess, (state, { game }) => {
    // return adapter.addMany(pizzas, state);
    // return adapter.setAll(games, state);
    return adapter.setOne(game, state);
  }),
);

// export function gameSaveReducer(state: State | undefined, action: Action) {
//   return reducer(state, action);
// }
