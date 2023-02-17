import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  childEntitySelector,
  childrenEntitiesSelector,
  relatedEntitySelector,
  rootEntitySelector,
} from 'ngrx-entity-relationship';

import { State as AddressState } from './entities/address/address.reducer';
import { State as CompanyState } from './entities/company/company.reducer';
import { State as UserState } from './entities/user/user.reducer';

// -------- Store Selectors --------

// feature selectors
export const selectUserState = createFeatureSelector<UserState>('users');
export const selectCompanyState =
  createFeatureSelector<CompanyState>('companies');
export const selectAddressState =
  createFeatureSelector<AddressState>('addresses');

// id selectors
export const selectCurrentCompanyId = createSelector(
  selectCompanyState,
  (s) => s.selectedId,
);
export const selectCurrentUsersIds = createSelector(
  selectUserState,
  (s) => s.selectedIds,
);

// -------- ngrx-entity-relationship Selectors --------

// creating selector producers for User and its relationships
export const rootUser = rootEntitySelector(selectUserState);
export const relUserCompany = relatedEntitySelector(
  selectCompanyState,
  'companyId',
  'company',
);

// creating selector producers for Company and its relationships
export const rootCompany = rootEntitySelector(selectCompanyState);
export const relCompanyAddress = relatedEntitySelector(
  selectAddressState,
  'addressId',
  'address',
);
export const relCompanyAdmin = relatedEntitySelector(
  selectUserState,
  'adminId',
  'admin',
);
export const relCompanyStaff = childrenEntitiesSelector(
  selectUserState,
  'companyId',
  'staff',
);

// creating selector producers for Address and its relationships
export const rootAddress = rootEntitySelector(selectAddressState);
export const relAddressCompany = childEntitySelector(
  selectCompanyState,
  'addressId',
  'company',
);
