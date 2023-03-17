import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';

export const entityMetadata: EntityMetadataMap = {
  Pizza: {},
};

const pluralNames = {
  Pizza: 'Pizzas',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
