import { ChangeDetectionStrategy, Component } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  relCompanyAddress,
  relUserCompany,
  rootUser,
  selectUserState,
} from '../../redux';
import { User } from '../../redux/entities/user/user.model';
import { EntityService } from '../../redux/entity.service';

// https://github.com/ngrx/platform/issues/2980#issuecomment-819551245
export const selectUser = (id: string) =>
  createSelector(selectUserState, (user) => user.entities[id]);

@Component({
  selector: 'app-ngrx-entity-relationship',
  templateUrl: './ngrx-entity-relationship.component.html',
  styleUrls: ['./ngrx-entity-relationship.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgrxEntityRelationshipComponent {
  // public readonly user$: Observable<User>;
  public readonly user$: Observable<User | undefined>;

  // prettier-ignore
  private readonly user = rootUser(
    relUserCompany(
      // // UNCOMMENT THIS
      // relCompanyStaff(
      //   relUserCompany(
      //     relCompanyAdmin(),
      //   ),
      // ),
      relCompanyAddress(
        // // UNCOMMENT THIS
        // relAddressCompany(
        //   relCompanyAdmin(
        //     relUserCompany(
        //       relCompanyAddress(),
        //     ),
        //   ),
        // ),
      ),
    ),
  );

  constructor(
    protected readonly store: Store,
    public readonly entitiesService: EntityService,
  ) {
    // this.user$ = this.store
    //   .select(this.user, '1')
    //   .pipe(filter((user): user is User => !!user));

    this.user$ = this.store.select(selectUser('1'));
  }

  public ngOnDestroy(): void {
    this.user.release();
  }
}
