import { isDevMode, NgModule } from '@angular/core';
// import { EntityDataModule } from '@ngrx/data';
import { EntityDataModuleWithoutEffects } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { metaReducers, reducers } from '.';
import { entityConfig } from './entities/entity-metadata';
import { ProductService } from './entities/product/product.service';

@NgModule({
  declarations: [],
  imports: [
    // https://ngrx.io/guide/store/metareducers
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    // https://ngrx.io/api/data | https://ngrx.io/api/data/EntityDataModuleWithoutEffects
    // EntityDataModule.forRoot(entityConfig),
    EntityDataModuleWithoutEffects.forRoot(entityConfig),
  ],
  // exports: [StoreModule, StoreDevtoolsModule, EffectsModule, EntityDataModule],
  exports: [
    StoreModule,
    StoreDevtoolsModule,
    EffectsModule,
    EntityDataModuleWithoutEffects,
  ],
  providers: [ProductService],
})
export class AppReduxModule {}
