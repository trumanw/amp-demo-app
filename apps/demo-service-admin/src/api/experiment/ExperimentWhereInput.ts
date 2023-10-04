import { StringFilter } from "../../util/StringFilter";
import { OptimizationConfigWhereUniqueInput } from "../optimizationConfig/OptimizationConfigWhereUniqueInput";
import { SearchSpaceWhereUniqueInput } from "../searchSpace/SearchSpaceWhereUniqueInput";

export type ExperimentWhereInput = {
  goal?: "MOO";
  id?: StringFilter;
  name?: StringFilter;
  optimizationConfig?: OptimizationConfigWhereUniqueInput;
  searchSpace?: SearchSpaceWhereUniqueInput;
};
