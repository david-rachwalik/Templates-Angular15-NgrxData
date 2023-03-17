import { isDevMode, NgModule } from '@angular/core';
import { EntityDataModule } from '@ngrx/data';
// import { EntityDataModuleWithoutEffects } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
// import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { metaReducers, reducers } from '.';
// import { metaReducers, reducers, State as AppState } from '.';
import { entityConfig } from './entities/entity-metadata';
import { ProductService } from './entities/product/product.service';

// const rootStoreConfig: RootStoreConfig<AppState> = {
//   initialState: {},
//   metaReducers,
//   // Most checks are enabled by default
//   // runtimeChecks: {
//   //   strictStateImmutability: true,
//   //   strictActionImmutability: true,
//   // },
// };

// When the server root is different than the client (https://ngrx.io/guide/data/entity-dataservice)
// const dataServiceConfig: DefaultDataServiceConfig = {
//   root: 'https://api.example.com',
// };

@NgModule({
  declarations: [],
  imports: [
    // https://ngrx.io/guide/store/metareducers
    StoreModule.forRoot(reducers, { metaReducers }),
    // StoreModule.forRoot(reducers, rootStoreConfig),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    // https://ngrx.io/api/data | https://ngrx.io/api/data/EntityDataModuleWithoutEffects
    EntityDataModule.forRoot(entityConfig),
    // EntityDataModuleWithoutEffects.forRoot(entityConfig),
  ],
  // exports: [StoreModule, StoreDevtoolsModule, EffectsModule, EntityDataModule],
  exports: [
    StoreModule,
    StoreDevtoolsModule,
    EffectsModule,
    EntityDataModule,
    // EntityDataModuleWithoutEffects,
  ],
  providers: [
    ProductService,
    // { provide: DefaultDataServiceConfig, useValue: dataServiceConfig },
  ],
})
export class AppReduxModule {}
