import { Component, OnInit } from '@angular/core';
// import { EntityCollection, EntityCollectionServiceBase } from '@ngrx/data';

import {
  Pizza,
  PizzaDataService,
} from '../../redux/entities/pizza/pizza.service';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.scss'],
})
export class PizzaOrderComponent implements OnInit {
  // pizzas$: Observable<Pizza[]> = of([]);
  // // pizzas$: Observable<EntityCollection<Pizza>>;
  // pizzaIds$: Observable<string[] | number[]> = of([]);
  // total$: Observable<number> = of(0);

  pizzas$ = this.pizzaService.entities$;
  pizzaIds$ = this.pizzaService.selectors$.keys$;
  total$ = this.pizzaService.selectors$.count$;

  showForm = false;
  editing = false;
  pizza: Pizza = { id: '', size: '' };

  constructor(private pizzaService: PizzaDataService) {}

  // called after component initialized and inputs set, but before view is rendered
  ngOnInit(): void {
    this.pizzaService.getAll();
  }

  createPizza() {
    const pizza: Pizza = {
      id: new Date().getUTCMilliseconds().toString(),
      size: 'small',
    };
    this.pizzaService.add(pizza);
  }

  // updatePizza(pizza: Pizza, size: string) {
  //   this.pizzaService.update(pizza.id, { size });
  // }

  // deletePizza(id: string) {
  //   this.pizzaService.remove(id);
  // }

  add() {
    this.showForm = true;
    this.editing = false;
    this.pizza = { id: '', size: '' };
  }

  edit(pizza: Pizza) {
    this.showForm = true;
    this.editing = true;
    this.pizza = { ...pizza };
  }

  delete(id: string) {
    this.pizzaService.delete(id);
  }

  submitForm() {
    if (this.editing) {
      this.pizzaService.update(this.pizza);
    } else {
      this.pizzaService.add(this.pizza);
    }
    this.showForm = false;
  }
}
