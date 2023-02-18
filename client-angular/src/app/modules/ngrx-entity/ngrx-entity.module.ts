import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { PizzaRoutingModule } from './ngrx-entity-routing.module';
import { PizzaOrderComponent } from './pages/pizza-order/pizza-order.component';
import { PizzaReduxModule } from './redux/redux.module';

@NgModule({
  declarations: [PizzaOrderComponent],
  imports: [SharedModule, PizzaRoutingModule, PizzaReduxModule],
  // Services provided here are only available within context of the module
})
export class NgrxEntityModule {}
