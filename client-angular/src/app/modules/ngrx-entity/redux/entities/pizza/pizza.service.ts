import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as PizzaActions from './pizza.actions';
import { Pizza } from './pizza.model';
// import { State as PizzaState } from './pizza.reducer';
import * as fromPizza from './pizza.selectors';

export { Pizza } from './pizza.model';

// Use root 'Injectable' when service should be shared across the entire app
// @Injectable({
//   providedIn: 'root',
// })
// Use the 'providers' array in the module decorator to only be available within the context of the lazy-loaded module
@Injectable()
export class PizzaService {
  // constructor(private store: Store<PizzaState>) {}
  constructor(private store: Store) {}

  // --- Selection Methods ---

  // select the array of objects
  getAll(): Observable<Pizza[]> {
    return this.store.select(fromPizza.selectAll);
  }

  // select the total count
  getTotal(): Observable<number> {
    return this.store.select(fromPizza.selectTotal);
  }

  // select the array of ids
  getIds(): Observable<string[] | number[]> {
    return this.store.select(fromPizza.selectIds);
  }

  // select the dictionary of entities
  getEntities(): Observable<Dictionary<Pizza>> {
    return this.store.select(fromPizza.selectEntities);
  }

  // --- Actionable Methods ---

  add(pizza: Pizza): void {
    this.store.dispatch(PizzaActions.createPizza({ pizza }));
  }

  // https://ngrx.io/guide/entity/adapter#entity-updates
  update(id: string, changes: Partial<Pizza>): void {
    // const changedPizza: Pizza = { ...pizza, size };
    // console.log('original pizza', pizza);
    // console.log('changed pizza', changedPizza);
    // this.store.dispatch(
    //   PizzaActions.updatePizza({
    //     pizza: {
    //       id: pizza.id,
    //       changes: changedPizza,
    //     },
    //   }),
    // );
    this.store.dispatch(
      PizzaActions.updatePizza({
        pizza: {
          id,
          changes,
        },
      }),
    );
  }

  remove(id: string): void {
    this.store.dispatch(PizzaActions.deletePizza({ id }));
  }
}
