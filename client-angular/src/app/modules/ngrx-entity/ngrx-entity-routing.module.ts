import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PizzaOrderComponent } from './pages/pizza-order/pizza-order.component';

const routes: Routes = [{ path: '', component: PizzaOrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaRoutingModule {}
