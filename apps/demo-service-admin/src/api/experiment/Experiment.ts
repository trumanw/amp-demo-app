import { OptimizationConfig } from "../optimizationConfig/OptimizationConfig";
import { User } from "../user/User";
import { SearchSpace } from "../searchSpace/SearchSpace";

export type Experiment = {
  createdAt: Date;
  goal?: "MOO";
  id: string;
  name: string;
  optimizationConfig?: OptimizationConfig | null;
  owner?: User;
  searchSpace?: SearchSpace | null;
  updatedAt: Date;
};
