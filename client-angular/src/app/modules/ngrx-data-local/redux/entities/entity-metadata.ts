import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';

export const entityMetadata: EntityMetadataMap = {
  Pizza: {},
  SaveState: {},
};

const pluralNames = {
  Pizza: 'Pizzas',
  SaveState: 'SaveStates',
};

// const defaultDataServiceConfig: DefaultDataServiceConfig = {
//   root: 'https://your-api-url.com',
// };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
