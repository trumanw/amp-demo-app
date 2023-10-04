import { OptimizationConfigWhereUniqueInput } from "../optimizationConfig/OptimizationConfigWhereUniqueInput";

export type ObjectiveUpdateInput = {
  objectiveBody?: string | null;
  objectiveClass?: string | null;
  objectiveName?: string | null;
  optimizationConfig?: OptimizationConfigWhereUniqueInput | null;
};
