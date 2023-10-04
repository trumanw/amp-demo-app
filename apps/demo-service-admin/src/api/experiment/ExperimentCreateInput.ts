import { OptimizationConfigWhereUniqueInput } from "../optimizationConfig/OptimizationConfigWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SearchSpaceWhereUniqueInput } from "../searchSpace/SearchSpaceWhereUniqueInput";

export type ExperimentCreateInput = {
  goal: "MOO";
  name: string;
  optimizationConfig?: OptimizationConfigWhereUniqueInput | null;
  owner: UserWhereUniqueInput;
  searchSpace?: SearchSpaceWhereUniqueInput | null;
};
