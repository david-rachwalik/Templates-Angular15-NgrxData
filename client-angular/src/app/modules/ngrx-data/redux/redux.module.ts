import { NgModule } from '@angular/core';
import { EntityDefinitionService } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';

import { entityMetadata } from './data/entity-metadata';
import { PizzaDataService } from './data/pizza/pizza.service';
import { metaReducers, reducers } from './reducers';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature('ngrx-data', reducers, { metaReducers })],
  exports: [StoreModule],
  providers: [PizzaDataService],
})
export class DataReduxModule {
  // @ngrx/data missing forFeature method for lazy loading
  // https://github.com/ngrx/platform/issues/2732#issuecomment-704222155
  constructor(eds: EntityDefinitionService) {
    eds.registerMetadataMap(entityMetadata);
  }
}
