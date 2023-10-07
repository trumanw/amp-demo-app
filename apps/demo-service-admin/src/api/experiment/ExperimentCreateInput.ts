import { OptimizationConfigWhereUniqueInput } from "../optimizationConfig/OptimizationConfigWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SearchSpaceWhereUniqueInput } from "../searchSpace/SearchSpaceWhereUniqueInput";
import { TrialCreateNestedManyWithoutExperimentsInput } from "./TrialCreateNestedManyWithoutExperimentsInput";

export type ExperimentCreateInput = {
  goal: "MOO";
  name: string;
  optimizationConfig?: OptimizationConfigWhereUniqueInput | null;
  owner: UserWhereUniqueInput;
  searchSpace?: SearchSpaceWhereUniqueInput | null;
  trials?: TrialCreateNestedManyWithoutExperimentsInput;
};
