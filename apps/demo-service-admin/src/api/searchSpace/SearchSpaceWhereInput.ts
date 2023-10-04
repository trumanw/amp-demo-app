import { ExperimentListRelationFilter } from "../experiment/ExperimentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParameterConstraintListRelationFilter } from "../parameterConstraint/ParameterConstraintListRelationFilter";
import { ParameterListRelationFilter } from "../parameter/ParameterListRelationFilter";

export type SearchSpaceWhereInput = {
  experiments?: ExperimentListRelationFilter;
  id?: StringFilter;
  parameterConstraints?: ParameterConstraintListRelationFilter;
  parameters?: ParameterListRelationFilter;
};
