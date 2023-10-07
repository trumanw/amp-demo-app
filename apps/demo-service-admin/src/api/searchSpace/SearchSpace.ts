import { Experiment } from "../experiment/Experiment";
import { Parameter } from "../parameter/Parameter";

export type SearchSpace = {
  createdAt: Date;
  experiments?: Array<Experiment>;
  id: string;
  parameters?: Array<Parameter>;
  updatedAt: Date;
};
