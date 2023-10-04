import { ExperimentCreateNestedManyWithoutOptimizationConfigsInput } from "./ExperimentCreateNestedManyWithoutOptimizationConfigsInput";
import { ObjectiveCreateNestedManyWithoutOptimizationConfigsInput } from "./ObjectiveCreateNestedManyWithoutOptimizationConfigsInput";

export type OptimizationConfigCreateInput = {
  experiments?: ExperimentCreateNestedManyWithoutOptimizationConfigsInput;
  objectives?: ObjectiveCreateNestedManyWithoutOptimizationConfigsInput;
  outcomeConstraints?: string | null;
};
