import { OptimizationConfigWhereUniqueInput } from "../optimizationConfig/OptimizationConfigWhereUniqueInput";

export type ObjectiveCreateInput = {
  objectiveBody?: string | null;
  objectiveClass?: string | null;
  objectiveName?: string | null;
  optimizationConfig?: OptimizationConfigWhereUniqueInput | null;
};
