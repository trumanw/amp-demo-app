import { ExperimentUpdateManyWithoutSearchSpacesInput } from "./ExperimentUpdateManyWithoutSearchSpacesInput";
import { ParameterConstraintUpdateManyWithoutSearchSpacesInput } from "./ParameterConstraintUpdateManyWithoutSearchSpacesInput";
import { ParameterUpdateManyWithoutSearchSpacesInput } from "./ParameterUpdateManyWithoutSearchSpacesInput";

export type SearchSpaceUpdateInput = {
  experiments?: ExperimentUpdateManyWithoutSearchSpacesInput;
  parameterConstraints?: ParameterConstraintUpdateManyWithoutSearchSpacesInput;
  parameters?: ParameterUpdateManyWithoutSearchSpacesInput;
};
