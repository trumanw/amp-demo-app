import { ExperimentWhereUniqueInput } from "../experiment/ExperimentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntFilter } from "../../util/IntFilter";

export type TrialWhereInput = {
  experiment?: ExperimentWhereUniqueInput;
  id?: StringFilter;
  trialBody?: JsonFilter;
  trialIndex?: IntFilter;
  trialType?: "init" | "autogen" | "valid";
};
