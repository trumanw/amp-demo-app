import { Parameter as TParameter } from "../api/parameter/Parameter";

export const PARAMETER_TITLE_FIELD = "parameterName";

export const ParameterTitle = (record: TParameter): string => {
  return record.parameterName?.toString() || String(record.id);
};
