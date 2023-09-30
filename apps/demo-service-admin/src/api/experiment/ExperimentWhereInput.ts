import { StringFilter } from "../../util/StringFilter";

export type ExperimentWhereInput = {
  goal?: "MOO";
  id?: StringFilter;
  name?: StringFilter;
};
