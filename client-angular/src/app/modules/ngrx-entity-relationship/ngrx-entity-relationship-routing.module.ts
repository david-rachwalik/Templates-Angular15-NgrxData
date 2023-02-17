import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgrxEntityRelationshipComponent } from './pages/ngrx-entity-relationship/ngrx-entity-relationship.component';

const routes: Routes = [
  { path: '', component: NgrxEntityRelationshipComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgrxEntityRelationshipRoutingModule {}
