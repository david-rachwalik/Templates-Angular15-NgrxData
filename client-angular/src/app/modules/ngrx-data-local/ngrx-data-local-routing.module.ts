import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { NgrxDataComponent } from './pages/ngrx-data/ngrx-data.component';
import { PizzaOrderComponent } from './pages/pizza-order/pizza-order.component';

const routes: Routes = [
  // { path: '', component: NgrxDataComponent },
  { path: '', component: PizzaOrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgrxDataLocalRoutingModule {}
