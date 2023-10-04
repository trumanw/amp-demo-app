import { Experiment } from "../experiment/Experiment";
import { Objective } from "../objective/Objective";

export type OptimizationConfig = {
  createdAt: Date;
  experiments?: Array<Experiment>;
  id: string;
  objectives?: Array<Objective>;
  outcomeConstraints: string | null;
  updatedAt: Date;
};
