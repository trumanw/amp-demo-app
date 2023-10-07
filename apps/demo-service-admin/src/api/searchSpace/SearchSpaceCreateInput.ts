import { ExperimentCreateNestedManyWithoutSearchSpacesInput } from "./ExperimentCreateNestedManyWithoutSearchSpacesInput";
import { ParameterCreateNestedManyWithoutSearchSpacesInput } from "./ParameterCreateNestedManyWithoutSearchSpacesInput";

export type SearchSpaceCreateInput = {
  experiments?: ExperimentCreateNestedManyWithoutSearchSpacesInput;
  parameters?: ParameterCreateNestedManyWithoutSearchSpacesInput;
};
