import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ParameterSpaceCreateNestedManyWithoutExperimentsInput } from "./ParameterSpaceCreateNestedManyWithoutExperimentsInput";

export type ExperimentCreateInput = {
  goal: "MOO";
  name: string;
  owner: UserWhereUniqueInput;
  parameterSpace?: ParameterSpaceCreateNestedManyWithoutExperimentsInput;
};
