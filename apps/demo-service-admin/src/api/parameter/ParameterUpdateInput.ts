import { SearchSpaceWhereUniqueInput } from "../searchSpace/SearchSpaceWhereUniqueInput";

export type ParameterUpdateInput = {
  parameterBody?: string | null;
  parameterClass?: string | null;
  parameterName?: string | null;
  searchSpace?: SearchSpaceWhereUniqueInput | null;
};
