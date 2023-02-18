import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/pages/home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ngrx-entity-relationship',
    loadChildren: () =>
      import(
        './modules/ngrx-entity-relationship/ngrx-entity-relationship.module'
      ).then((m) => m.NgrxEntityRelationshipModule),
  },
  { path: 'rel', redirectTo: 'ngrx-entity-relationship', pathMatch: 'full' },
  {
    path: 'ngrx-data',
    loadChildren: () =>
      import('./modules/ngrx-data/ngrx-data.module').then(
        (m) => m.NgrxDataModule,
      ),
  },
  { path: 'data', redirectTo: 'ngrx-data', pathMatch: 'full' },
  {
    path: 'ngrx-entity',
    loadChildren: () =>
      import('./modules/ngrx-entity/ngrx-entity.module').then(
        (m) => m.NgrxEntityModule,
      ),
  },
  { path: 'pizza', redirectTo: 'ngrx-entity', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
