import { StringFilter } from "../../util/StringFilter";
import { ParameterSpaceListRelationFilter } from "../parameterSpace/ParameterSpaceListRelationFilter";

export type ExperimentWhereInput = {
  goal?: "MOO";
  id?: StringFilter;
  name?: StringFilter;
  parameterSpace?: ParameterSpaceListRelationFilter;
};
