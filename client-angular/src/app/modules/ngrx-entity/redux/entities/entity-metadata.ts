import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';

export const entityMetadata: EntityMetadataMap = {};

const pluralNames = {};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
