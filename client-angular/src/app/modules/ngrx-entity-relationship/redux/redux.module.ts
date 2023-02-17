import { NgModule } from '@angular/core';
import { EntityDefinitionService } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { entityMetadata } from './entities/entity-metadata';
import { EntityEffects } from './entity.effects';
import { metaReducers, reducers } from './reducers';

@NgModule({
  declarations: [],
  imports: [
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    // }),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    // EffectsModule.forRoot([]),
    // EntityDataModule.forRoot(entityConfig),

    // StoreModule.forFeature('addresses', reducers.addresses),
    // StoreModule.forFeature('companies', reducers.companies),
    // StoreModule.forFeature('users', reducers.users),

    // StoreModule.forFeature('addresses', addressReducer),
    // StoreModule.forFeature('companies', companyReducer),
    // StoreModule.forFeature('users', userReducer),

    StoreModule.forFeature('ngrx-entity-relationship', reducers, {
      metaReducers,
    }),
    EffectsModule.forFeature([EntityEffects]),
  ],
  // exports: [StoreModule, StoreDevtoolsModule, EffectsModule, EntityDataModule],
  exports: [StoreModule, EffectsModule],
})
export class NgrxEntityRelationshipReduxModule {
  // @ngrx/data missing forFeature method for lazy loading
  // https://github.com/ngrx/platform/issues/2732#issuecomment-704222155
  constructor(eds: EntityDefinitionService) {
    // EntityDataModuleWithoutEffects.forRoot(entityConfig),
    // eds.registerMetadataMap(entityConfig);
    eds.registerMetadataMap(entityMetadata);
  }
}
