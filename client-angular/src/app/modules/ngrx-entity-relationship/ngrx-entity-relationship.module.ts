import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgrxEntityRelationshipRoutingModule } from './ngrx-entity-relationship-routing.module';
import { NgrxEntityRelationshipComponent } from './pages/ngrx-entity-relationship/ngrx-entity-relationship.component';
import { EntityService } from './redux/entity.service';
import { NgrxEntityRelationshipReduxModule } from './redux/redux.module';

@NgModule({
  declarations: [NgrxEntityRelationshipComponent],
  imports: [
    SharedModule,
    NgrxEntityRelationshipRoutingModule,
    NgrxEntityRelationshipReduxModule,
  ],
  providers: [EntityService],
})
export class NgrxEntityRelationshipModule {}
