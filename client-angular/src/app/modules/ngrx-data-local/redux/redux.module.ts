import { NgModule } from '@angular/core';
import { EntityDefinitionService } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';

import { entityMetadata } from './entities/entity-metadata';
import { PizzaDataLocalService } from './entities/pizza/pizza-local.service';
import { PizzaDataService } from './entities/pizza/pizza.service';
import { metaReducers, reducers } from './entities/reducers';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('ngrx-data-local', reducers, { metaReducers }),
  ],
  exports: [StoreModule],
  // Use 'providers' for services to only be available within the module
  providers: [PizzaDataService, PizzaDataLocalService],
})
export class DataLocalReduxModule {
  // @ngrx/data missing forFeature method for lazy loading
  // https://github.com/ngrx/platform/issues/2732#issuecomment-704222155
  constructor(eds: EntityDefinitionService) {
    eds.registerMetadataMap(entityMetadata);
  }
}
