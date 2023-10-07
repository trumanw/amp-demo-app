import { ExperimentListRelationFilter } from "../experiment/ExperimentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParameterListRelationFilter } from "../parameter/ParameterListRelationFilter";

export type SearchSpaceWhereInput = {
  experiments?: ExperimentListRelationFilter;
  id?: StringFilter;
  parameters?: ParameterListRelationFilter;
};
