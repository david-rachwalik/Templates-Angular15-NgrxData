import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { NgrxDataRoutingModule } from './ngrx-data-routing.module';
import { NgrxDataComponent } from './pages/ngrx-data/ngrx-data.component';
import { PizzaOrderComponent } from './pages/pizza-order/pizza-order.component';
import { DataReduxModule } from './redux/redux.module';

@NgModule({
  declarations: [NgrxDataComponent, PizzaOrderComponent],
  imports: [SharedModule, NgrxDataRoutingModule, DataReduxModule],
})
export class NgrxDataModule {}
