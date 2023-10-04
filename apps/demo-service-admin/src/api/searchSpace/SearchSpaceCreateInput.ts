import { ExperimentCreateNestedManyWithoutSearchSpacesInput } from "./ExperimentCreateNestedManyWithoutSearchSpacesInput";
import { ParameterConstraintCreateNestedManyWithoutSearchSpacesInput } from "./ParameterConstraintCreateNestedManyWithoutSearchSpacesInput";
import { ParameterCreateNestedManyWithoutSearchSpacesInput } from "./ParameterCreateNestedManyWithoutSearchSpacesInput";

export type SearchSpaceCreateInput = {
  experiments?: ExperimentCreateNestedManyWithoutSearchSpacesInput;
  parameterConstraints?: ParameterConstraintCreateNestedManyWithoutSearchSpacesInput;
  parameters?: ParameterCreateNestedManyWithoutSearchSpacesInput;
};
