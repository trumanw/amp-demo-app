import { InputJsonValue } from "../../types";
import { ExperimentCreateNestedManyWithoutParameterSpacesInput } from "./ExperimentCreateNestedManyWithoutParameterSpacesInput";

export type ParameterSpaceCreateInput = {
  bounds?: InputJsonValue;
  experiments?: ExperimentCreateNestedManyWithoutParameterSpacesInput;
  name?: string | null;
  parameterType: "Range" | "Choice" | "Fixed";
  valueType?: "BOOL" | "FLOAT" | "INT" | "STRING" | null;
};
