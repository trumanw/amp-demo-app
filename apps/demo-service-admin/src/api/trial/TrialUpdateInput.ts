import { ExperimentWhereUniqueInput } from "../experiment/ExperimentWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type TrialUpdateInput = {
  experiment?: ExperimentWhereUniqueInput | null;
  trialBody?: InputJsonValue;
  trialIndex?: number;
  trialType?: "init" | "autogen" | "valid" | null;
};
