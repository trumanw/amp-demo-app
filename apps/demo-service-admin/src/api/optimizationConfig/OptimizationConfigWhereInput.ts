import { ExperimentListRelationFilter } from "../experiment/ExperimentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ObjectiveListRelationFilter } from "../objective/ObjectiveListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OptimizationConfigWhereInput = {
  experiments?: ExperimentListRelationFilter;
  id?: StringFilter;
  objectives?: ObjectiveListRelationFilter;
  outcomeConstraints?: StringNullableFilter;
};
