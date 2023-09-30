import { ParameterSpace as TParameterSpace } from "../api/parameterSpace/ParameterSpace";

export const PARAMETERSPACE_TITLE_FIELD = "name";

export const ParameterSpaceTitle = (record: TParameterSpace): string => {
  return record.name?.toString() || String(record.id);
};
