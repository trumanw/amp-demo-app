import { JsonFilter } from "../../util/JsonFilter";
import { ExperimentListRelationFilter } from "../experiment/ExperimentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ParameterSpaceWhereInput = {
  bounds?: JsonFilter;
  experiments?: ExperimentListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  parameterType?: "Range" | "Choice" | "Fixed";
  valueType?: "BOOL" | "FLOAT" | "INT" | "STRING";
};
