import { InputJsonValue } from "../../types";
import { ExperimentUpdateManyWithoutParameterSpacesInput } from "./ExperimentUpdateManyWithoutParameterSpacesInput";

export type ParameterSpaceUpdateInput = {
  bounds?: InputJsonValue;
  experiments?: ExperimentUpdateManyWithoutParameterSpacesInput;
  name?: string | null;
  parameterType?: "Range" | "Choice" | "Fixed";
  valueType?: "BOOL" | "FLOAT" | "INT" | "STRING" | null;
};
