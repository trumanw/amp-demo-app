import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ParameterSpaceUpdateManyWithoutExperimentsInput } from "./ParameterSpaceUpdateManyWithoutExperimentsInput";

export type ExperimentUpdateInput = {
  goal?: "MOO";
  name?: string;
  owner?: UserWhereUniqueInput;
  parameterSpace?: ParameterSpaceUpdateManyWithoutExperimentsInput;
};
