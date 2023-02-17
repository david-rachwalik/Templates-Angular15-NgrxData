import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT,
} from '@ngrx/effects';
import { reduceFlat, reduceGraph } from 'ngrx-entity-relationship';
import { switchMapTo } from 'rxjs/operators';
import { rootAddress, rootCompany, rootUser } from './selectors';

@Injectable()
export class EntityEffects {
  // loadMovies$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType('[Movies Page] Load Movies'),
  //     mergeMap(() =>
  //       this.moviesService.getAll().pipe(
  //         map((movies) => ({
  //           type: '[Movies API] Movies Loaded Success',
  //           payload: movies,
  //         })),
  //         catchError(() => EMPTY),
  //       ),
  //     ),
  //   ),
  // );

  public readonly data$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      switchMapTo([
        reduceGraph({
          data: [
            {
              id: '1',
              street: 'Main st.',
              city: 'Town',
              country: 'Land',
            },
          ],
          selector: rootAddress(),
        }),
        reduceGraph({
          data: [
            {
              id: '1',
              name: 'Magic',
              adminId: '2',
              addressId: '1',
            },
          ],
          selector: rootCompany(),
        }),
        reduceFlat({
          data: {
            users: [
              {
                id: '1',
                firstName: 'John',
                lastName: 'Smith',
                companyId: '1',
              },
              {
                id: '2',
                firstName: 'Jack',
                lastName: 'Black',
                companyId: '1',
              },
            ],
          },
          selector: rootUser({
            flatKey: 'users',
          }),
        }),
      ]),
    ),
  );

  constructor(protected readonly actions$: Actions) {}
}
