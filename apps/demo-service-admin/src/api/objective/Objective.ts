import { OptimizationConfig } from "../optimizationConfig/OptimizationConfig";

export type Objective = {
  createdAt: Date;
  id: string;
  objectiveBody: string | null;
  objectiveClass: string | null;
  objectiveName: string | null;
  optimizationConfig?: OptimizationConfig | null;
  updatedAt: Date;
};
