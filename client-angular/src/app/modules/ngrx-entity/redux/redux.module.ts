import { NgModule } from '@angular/core';
// import { EntityDefinitionService } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';

import { PizzaService } from './entities/pizza/pizza.service';
// import { entityMetadata } from './entities/entity-metadata';
import { metaReducers, reducers } from './reducers';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature('ngrx-entity', reducers, { metaReducers })],
  exports: [StoreModule],
  providers: [PizzaService],
})
export class PizzaReduxModule {
  // @ngrx/data missing forFeature method for lazy loading
  // https://github.com/ngrx/platform/issues/2732#issuecomment-704222155
  // constructor(eds: EntityDefinitionService) {
  //   eds.registerMetadataMap(entityMetadata);
  // }
}
