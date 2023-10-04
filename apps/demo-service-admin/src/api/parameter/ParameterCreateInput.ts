import { SearchSpaceWhereUniqueInput } from "../searchSpace/SearchSpaceWhereUniqueInput";

export type ParameterCreateInput = {
  parameterBody?: string | null;
  parameterClass?: string | null;
  parameterName?: string | null;
  searchSpace?: SearchSpaceWhereUniqueInput | null;
};
