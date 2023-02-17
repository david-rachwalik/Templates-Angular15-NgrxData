import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgrxDataComponent } from './pages/ngrx-data/ngrx-data.component';

const routes: Routes = [{ path: '', component: NgrxDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgrxDataRoutingModule {}
