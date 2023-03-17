# Demo of 'ngrx-store-localstorage' package

[NgRx LocalStorage](https://www.npmjs.com/package/ngrx-store-localstorage):

Simple syncing between ngrx store and local or session storage.

[NgRx Data](https://ngrx.io/guide/data):

- automates the creation of actions, reducers, effects, dispatchers, and selectors for each entity type
- provides default HTTP GET, PUT, POST, and DELETE methods for each entity type
- holds entity data as collections within a cache which is a slice of NgRx store state
- supports optimistic and pessimistic save strategies
- enables transactional save of multiple entities of multiple types in the same request
- makes reasonable default implementation choices
- offers numerous extension points for changing or augmenting those default behaviors

NgRx Data is best at managing persisted entity data (e.g. Customers and Orders) that many apps query and save to remote storage.

It is ill-suited to non-entity data. Value types, enumerations, session data and highly idiosyncratic data are better managed with standard NgRx. Real-world apps will benefit from a combination of NgRx techniques, all sharing a common store.

_[NGRX](https://ngrx.io):_ Reactive State for Angular

## Project Steps

Steps for a project using the latest Angular with no backend server. The state is only managed locally using `ngrx-store-localstorage` to sync a store slice to localStorage.

The goal would also be to accomplish this by leveraging `@ngrx/data`'s provided actions, selectors, reducers, etc. but it shouldn't have any effects calling to an external API.

1. Install the required dependencies:

   ```bash
   npm i @ngrx/{store,entity,effects,data} ngrx-store-localstorage
   ```

2. Create an interface to define the shape of the application state

   ```typescript
   interface SaveState {
     playerName: string;
     playerLevel: number;
     // ... other game state properties
   }
   interface GameState {
     saveState?: SaveState;
   }
   ```

3. Create a new `EntityMetadataMap` to configure the entity and collection names for the application

   ```typescript
   const entityMetadata: EntityMetadataMap = {
     SaveState: {},
   };
   const pluralNames = { SaveState: 'SaveStates' };
   ```

4. Create a module and configure it with the entity metadata and plural names

   ```typescript
   @NgModule({
     imports: [
       StoreModule.forRoot({}),
       EffectsModule.forRoot([]),
       EntityDataModule.forRoot({ entityMetadata, pluralNames }),
       StoreLocalStorageModule.forRoot({ key: 'gameSaves' }),
     ],
   })
   export class ReduxModule {}
   ```

   ### Component Steps

5. In the component, import the Store, Observable, and EntityCollectionService classes

   ```typescript
   import { Store } from '@ngrx/store';
   import { Observable } from 'rxjs';
   import { EntityCollectionService } from '@ngrx/data';
   ```

6. Inject the Store and EntityCollectionService into the component's constructor

   ```typescript
   constructor(private store: Store<GameState>, private saveService: EntityCollectionService<SaveState>) {}
   ```

7. In the component's `ngOnInit()` method, dispatch an action to load the game state from localStorage

   ```typescript
   ngOnInit() {
    this.store.dispatch(loadGame());
   }
   ```

8. Create a component actions file

   ```typescript
   export const loadGame = createAction('[Game] Load');

   export const loadGameSuccess = createAction(
     '[Game] Load Success',
     props<{ game: SaveState }>(),
   );

   export const loadGameFailure = createAction(
     '[Game] Load Failure',
     props<{ error: any }>(),
   );

   export const saveGame = createAction(
     '[Game] Save',
     props<{ game: SaveState }>(),
   );
   ```

9. Create a new `gameReducer()` function to handle the `loadGameSuccess` action

   ```typescript
   export function gameReducer(state: GameState | undefined, action: Action) {
     return reducer(state, action);
   }

   const reducer = createReducer(
     {},
     on(loadGameSuccess, (state, { game }) => game),
   );
   ```

10. In the component, create a `newGame()` method that dispatches the `saveGame` action with a new `SaveState` object

    ```typescript
    newGame() {
      const game: SaveState = { playerName: '', playerLevel: 1 };
      this.store.dispatch(saveGame({ game }));
    }
    ```

11. Create a `continueGame()` method in the component that navigates to the game screen if a saved game state is found in localStorage

    ```typescript
    continueGame() {
      const hasSave = this.saveService.getAll()
    }
    ```

---

## References

- [NgRx Docs](https://ngrx.io/docs)

---

### [Entity Interfaces](https://ngrx.io/guide/entity/interfaces)

EntityState: The Entity State is a predefined generic interface for a given entity collection with the following interface

```javascript
interface EntityState<V> {
  ids: string[] | number[];
  entities: { [id: string | id: number]: V };
}
```
