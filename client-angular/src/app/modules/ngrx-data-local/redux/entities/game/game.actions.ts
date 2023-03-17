import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { GameSave } from './game-save.model';

export enum ActionTypes {
  LOAD = '[Game] Load',
  LOAD_SUCCESS = '[Game] Load Success',
  LOAD_FAILURE = '[Game] Load Failure',
  LOAD_ALL_SUCCESS = '[Game] Load All Success',
  CREATE = '[Game] Create',
  UPDATE = '[Game] Update',
  DELETE = '[Game] Delete',
}

export const loadGame = createAction(ActionTypes.LOAD);

export const loadGameSuccess = createAction(
  ActionTypes.LOAD_SUCCESS,
  props<{ game: GameSave }>(),
);

export const loadGameFailure = createAction(
  ActionTypes.LOAD_FAILURE,
  props<{ error: any }>(),
);

export const loadAllGamesSuccess = createAction(
  ActionTypes.LOAD_ALL_SUCCESS,
  props<{ games: GameSave[] }>(),
);

export const createGame = createAction(
  ActionTypes.CREATE,
  props<{ game: GameSave }>(),
);

export const updateGame = createAction(
  ActionTypes.UPDATE,
  props<{ game: Update<GameSave> }>(),
);

export const deleteGame = createAction(
  ActionTypes.DELETE,
  props<{ id: string }>(),
);
