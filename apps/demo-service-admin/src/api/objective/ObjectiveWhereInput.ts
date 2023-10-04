import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OptimizationConfigWhereUniqueInput } from "../optimizationConfig/OptimizationConfigWhereUniqueInput";

export type ObjectiveWhereInput = {
  id?: StringFilter;
  objectiveBody?: StringNullableFilter;
  objectiveClass?: StringNullableFilter;
  objectiveName?: StringNullableFilter;
  optimizationConfig?: OptimizationConfigWhereUniqueInput;
};
