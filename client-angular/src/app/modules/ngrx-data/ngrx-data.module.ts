import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgrxDataRoutingModule } from './ngrx-data-routing.module';
import { NgrxDataComponent } from './pages/ngrx-data/ngrx-data.component';

@NgModule({
  declarations: [NgrxDataComponent],
  imports: [SharedModule, NgrxDataRoutingModule],
})
export class NgrxDataModule {}
