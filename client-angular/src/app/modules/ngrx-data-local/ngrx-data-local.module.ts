import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { NgrxDataLocalRoutingModule } from './ngrx-data-local-routing.module';
import { PizzaOrderComponent } from './pages/pizza-order/pizza-order.component';
import { DataLocalReduxModule } from './redux/redux.module';

@NgModule({
  declarations: [PizzaOrderComponent],
  imports: [SharedModule, NgrxDataLocalRoutingModule, DataLocalReduxModule],
})
export class NgrxDataLocalModule {}
