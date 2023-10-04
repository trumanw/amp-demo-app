import { OptimizationConfig as TOptimizationConfig } from "../api/optimizationConfig/OptimizationConfig";

export const OPTIMIZATIONCONFIG_TITLE_FIELD = "outcomeConstraints";

export const OptimizationConfigTitle = (
  record: TOptimizationConfig
): string => {
  return record.outcomeConstraints?.toString() || String(record.id);
};
