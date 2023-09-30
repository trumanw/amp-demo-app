import { User } from "../user/User";
import { ParameterSpace } from "../parameterSpace/ParameterSpace";

export type Experiment = {
  createdAt: Date;
  goal?: "MOO";
  id: string;
  name: string;
  owner?: User;
  parameterSpace?: Array<ParameterSpace>;
  updatedAt: Date;
};
