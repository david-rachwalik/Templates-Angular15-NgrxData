import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppReduxModule } from './shared/redux/redux.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // --- Core imports ---
    BrowserModule,
    // BrowserAnimationsModule,
    AppReduxModule,
    // --- Routing imports ---
    AppRoutingModule,
    // --- Shared imports ---
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
