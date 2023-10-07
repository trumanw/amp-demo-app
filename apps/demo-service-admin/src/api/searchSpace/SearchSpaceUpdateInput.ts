import { ExperimentUpdateManyWithoutSearchSpacesInput } from "./ExperimentUpdateManyWithoutSearchSpacesInput";
import { ParameterUpdateManyWithoutSearchSpacesInput } from "./ParameterUpdateManyWithoutSearchSpacesInput";

export type SearchSpaceUpdateInput = {
  experiments?: ExperimentUpdateManyWithoutSearchSpacesInput;
  parameters?: ParameterUpdateManyWithoutSearchSpacesInput;
};
