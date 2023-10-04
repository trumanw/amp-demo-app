import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SearchSpaceWhereUniqueInput } from "../searchSpace/SearchSpaceWhereUniqueInput";

export type ParameterWhereInput = {
  id?: StringFilter;
  parameterBody?: StringNullableFilter;
  parameterClass?: StringNullableFilter;
  parameterName?: StringNullableFilter;
  searchSpace?: SearchSpaceWhereUniqueInput;
};
