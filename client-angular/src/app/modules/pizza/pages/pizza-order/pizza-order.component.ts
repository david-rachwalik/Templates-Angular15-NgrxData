import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Pizza, PizzaService } from '../../redux/entities/pizza/pizza.service';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.scss'],
})
export class PizzaOrderComponent implements OnInit {
  pizzas$: Observable<Pizza[]> = of([]);
  pizzaIds$: Observable<string[] | number[]> = of([]);
  total$: Observable<number> = of(0);

  constructor(private pizzaService: PizzaService) {}

  // called after component initialized and inputs set, but before view is rendered
  ngOnInit(): void {
    this.pizzas$ = this.pizzaService.getAll();
    this.pizzaIds$ = this.pizzaService.getIds();
    this.total$ = this.pizzaService.getTotal();
  }

  createPizza() {
    const pizza: Pizza = {
      id: new Date().getUTCMilliseconds().toString(),
      size: 'small',
    };
    this.pizzaService.add(pizza);
  }

  updatePizza(pizza: Pizza, size: string) {
    this.pizzaService.update(pizza.id, { size });
  }

  deletePizza(id: string) {
    this.pizzaService.remove(id);
  }
}
