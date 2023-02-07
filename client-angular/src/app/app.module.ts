import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot(reducers, {
      metaReducers
    }), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }), EffectsModule.forRoot([]), EntityDataModule.forRoot(entityConfig)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
