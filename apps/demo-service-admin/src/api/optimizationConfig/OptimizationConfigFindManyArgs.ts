import { OptimizationConfigWhereInput } from "./OptimizationConfigWhereInput";
import { OptimizationConfigOrderByInput } from "./OptimizationConfigOrderByInput";

export type OptimizationConfigFindManyArgs = {
  where?: OptimizationConfigWhereInput;
  orderBy?: Array<OptimizationConfigOrderByInput>;
  skip?: number;
  take?: number;
};
