import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { Pizza } from './pizza.model';
// import { State as PizzaState } from './pizza.reducer';

export { Pizza };

// Use root 'Injectable' when service should be shared across the entire app
// @Injectable({
//   providedIn: 'root',
// })
// Use the 'providers' array in the module decorator to only be available within the context of the lazy-loaded module
@Injectable()
export class PizzaDataService extends EntityCollectionServiceBase<Pizza> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient,
  ) {
    super('Pizza', serviceElementsFactory);
  }

  getPizzas() {
    return this.http.get<Pizza[]>('/api/pizzas');
  }
}
