import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Company } from './company.model';

export enum CompanyActionTypes {
  UPSERT = '[Company] Upsert Company',
  UPDATE = '[Company] Update Company',
}

export const upsertCompany = createAction(
  CompanyActionTypes.UPSERT,
  props<{ company: Company }>(),
);

export const updateCompany = createAction(
  CompanyActionTypes.UPSERT,
  props<{ company: Update<Company> }>(),
);
