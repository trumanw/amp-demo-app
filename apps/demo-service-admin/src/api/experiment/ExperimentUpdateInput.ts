import { OptimizationConfigWhereUniqueInput } from "../optimizationConfig/OptimizationConfigWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SearchSpaceWhereUniqueInput } from "../searchSpace/SearchSpaceWhereUniqueInput";
import { TrialUpdateManyWithoutExperimentsInput } from "./TrialUpdateManyWithoutExperimentsInput";

export type ExperimentUpdateInput = {
  goal?: "MOO";
  name?: string;
  optimizationConfig?: OptimizationConfigWhereUniqueInput | null;
  owner?: UserWhereUniqueInput;
  searchSpace?: SearchSpaceWhereUniqueInput | null;
  trials?: TrialUpdateManyWithoutExperimentsInput;
};
