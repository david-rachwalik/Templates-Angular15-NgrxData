import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

// import * as fromAddress from './address/address.reducer';
// import * as fromCompany from './company/company.reducer';
// import * as fromUser from './user/user.reducer';

// export interface State {
//   addresses: fromAddress.State;
//   companies: fromCompany.State;
//   users: fromUser.State;
// }

// export const reducers: ActionReducerMap<State> = {
//   addresses: fromAddress.reducer,
//   companies: fromCompany.reducer,
//   users: fromUser.reducer,
// };

import {
  addressReducer,
  State as AddressState,
} from './entities/address/address.reducer';
import {
  companyReducer,
  State as CompanyState,
} from './entities/company/company.reducer';
import { State as UserState, userReducer } from './entities/user/user.reducer';

export interface State {
  addresses: AddressState;
  companies: CompanyState;
  users: UserState;
}

export const reducers: ActionReducerMap<State> = {
  addresses: addressReducer,
  companies: companyReducer,
  users: userReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
