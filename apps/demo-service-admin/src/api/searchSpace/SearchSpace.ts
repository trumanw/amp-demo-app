import { Experiment } from "../experiment/Experiment";
import { ParameterConstraint } from "../parameterConstraint/ParameterConstraint";
import { Parameter } from "../parameter/Parameter";

export type SearchSpace = {
  createdAt: Date;
  experiments?: Array<Experiment>;
  id: string;
  parameterConstraints?: Array<ParameterConstraint>;
  parameters?: Array<Parameter>;
  updatedAt: Date;
};
