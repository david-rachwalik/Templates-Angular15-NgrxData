import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DefaultDataService,
  DefaultDataServiceConfig,
  HttpUrlGenerator,
} from '@ngrx/data';
import { Update } from '@ngrx/entity';
import { Observable, of, throwError } from 'rxjs';

import { Pizza } from './pizza.model';
// import { State as PizzaState } from './pizza.reducer';

export { Pizza };

// Use root 'Injectable' when service should be shared across the entire app
// @Injectable({
//   providedIn: 'root',
// })
// Use the 'providers' array in the module decorator to only be available within the context of the lazy-loaded module
@Injectable()
export class PizzaDataLocalService extends DefaultDataService<Pizza> {
  constructor(
    httpClient: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private storage: Storage,
    config: DefaultDataServiceConfig,
  ) {
    super('Pizza', httpClient, httpUrlGenerator, config);
  }

  override getAll(): Observable<Pizza[]> {
    const pizzas: Pizza[] = JSON.parse(
      this.storage.getItem('pizzas') || '[]',
    ) as Pizza[];
    return of(pizzas);
  }

  override add(pizza: Pizza): Observable<Pizza> {
    const pizzas: Pizza[] = JSON.parse(
      this.storage.getItem('pizzas') || '[]',
    ) as Pizza[];
    const maxId = pizzas.length > 0 ? Math.max(...pizzas.map((p) => +p.id)) : 0;
    // pizza.id = (maxId + 1).toString();
    const newPizza: Pizza = { ...pizza, id: (maxId + 1).toString() };
    pizzas.push(newPizza);
    this.storage.setItem('pizzas', JSON.stringify(pizzas));
    return of(newPizza);
  }

  override update(pizza: Update<Pizza>): Observable<Pizza> {
    const pizzas = JSON.parse(
      this.storage.getItem('pizzas') || '[]',
    ) as Pizza[];
    const index = pizzas.findIndex((p) => p.id === pizza.id);
    if (index !== -1) {
      const newPizza: Pizza = { ...pizzas[index], ...pizza.changes };
      pizzas[index] = newPizza;
      this.storage.setItem('pizzas', JSON.stringify(pizzas));
      return of(newPizza);
    }
    return throwError(() => new Error(`Pizza with id=${pizza.id} not found`));
  }

  override delete(id: string): Observable<string> {
    const pizzas = JSON.parse(
      this.storage.getItem('pizzas') || '[]',
    ) as Pizza[];
    const index = pizzas.findIndex((p) => p.id === id);
    if (index !== -1) {
      pizzas.splice(index, 1);
      this.storage.setItem('pizzas', JSON.stringify(pizzas));
      return of(id);
    }
    return throwError(() => new Error(`Pizza with id=${id} not found`));
  }
}
