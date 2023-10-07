import { OptimizationConfig } from "../optimizationConfig/OptimizationConfig";
import { User } from "../user/User";
import { SearchSpace } from "../searchSpace/SearchSpace";
import { Trial } from "../trial/Trial";

export type Experiment = {
  createdAt: Date;
  goal?: "MOO";
  id: string;
  name: string;
  optimizationConfig?: OptimizationConfig | null;
  owner?: User;
  searchSpace?: SearchSpace | null;
  trials?: Array<Trial>;
  updatedAt: Date;
};
