import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, first, tap } from 'rxjs/operators';

import { updateAddress } from './entities/address/address.actions';
import { Address } from './entities/address/address.model';
import { updateCompany } from './entities/company/company.actions';
import { Company } from './entities/company/company.model';
import { updateUser } from './entities/user/user.actions';
import { User } from './entities/user/user.model';
import { State } from './reducers';
import { rootAddress, rootCompany, rootUser } from './selectors';

@Injectable()
export class EntityService {
  constructor(protected readonly store: Store<State>) {}

  public changeUser(id: string): void {
    this.store
      .select(rootUser(), id)
      .pipe(
        filter((v): v is User => !!v),
        first(),
        tap((entity) => {
          const index = entity.lastName.match(/\d+$/)?.[0] || '0';
          this.store.dispatch(
            updateUser({
              user: {
                id,
                changes: {
                  lastName: `Changed User ${parseInt(index[0], 10) + 1}`,
                },
              },
            }),
          );
        }),
      )
      .subscribe();
  }

  public changeCompany(id: string): void {
    this.store
      .select(rootCompany(), id)
      .pipe(
        filter((v): v is Company => !!v),
        first(),
        tap((entity) => {
          const index = entity.name.match(/\d+$/)?.[0] || '0';
          this.store.dispatch(
            updateCompany({
              company: {
                id,
                changes: {
                  name: `Changed Company ${parseInt(index[0], 10) + 1}`,
                },
              },
            }),
          );
        }),
      )
      .subscribe();
  }

  public changeAddress(id: string): void {
    this.store
      .select(rootAddress(), id)
      .pipe(
        filter((v): v is Address => !!v),
        first(),
        tap((entity) => {
          const index = entity.street.match(/\d+$/)?.[0] || '0';
          this.store.dispatch(
            updateAddress({
              address: {
                id,
                changes: {
                  street: `Changed Address ${parseInt(index[0], 10) + 1}`,
                },
              },
            }),
          );
        }),
      )
      .subscribe();
  }
}
