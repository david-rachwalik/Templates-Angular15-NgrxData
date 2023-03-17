import { EntityState } from '@ngrx/entity';

export interface GameSave {
  id: string;
  playerName: string;
  playerLevel: number;
  // ... other game state properties
}

export interface GameState {
  saveState?: GameSave;
}
export interface GameSaveState extends EntityState<GameSave> {}
