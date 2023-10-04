import { StringFilter } from "../../util/StringFilter";
import { SearchSpaceWhereUniqueInput } from "../searchSpace/SearchSpaceWhereUniqueInput";

export type ParameterConstraintWhereInput = {
  id?: StringFilter;
  searchSpace?: SearchSpaceWhereUniqueInput;
};
