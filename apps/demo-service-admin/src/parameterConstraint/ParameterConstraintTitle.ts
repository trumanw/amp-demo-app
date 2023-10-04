import { ParameterConstraint as TParameterConstraint } from "../api/parameterConstraint/ParameterConstraint";

export const PARAMETERCONSTRAINT_TITLE_FIELD = "id";

export const ParameterConstraintTitle = (
  record: TParameterConstraint
): string => {
  return record.id?.toString() || String(record.id);
};
