import { StringFilter } from "../../util/StringFilter";
import { OptimizationConfigWhereUniqueInput } from "../optimizationConfig/OptimizationConfigWhereUniqueInput";
import { SearchSpaceWhereUniqueInput } from "../searchSpace/SearchSpaceWhereUniqueInput";
import { TrialListRelationFilter } from "../trial/TrialListRelationFilter";

export type ExperimentWhereInput = {
  goal?: "MOO";
  id?: StringFilter;
  name?: StringFilter;
  optimizationConfig?: OptimizationConfigWhereUniqueInput;
  searchSpace?: SearchSpaceWhereUniqueInput;
  trials?: TrialListRelationFilter;
};
