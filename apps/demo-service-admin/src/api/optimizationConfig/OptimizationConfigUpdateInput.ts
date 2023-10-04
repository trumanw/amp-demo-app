import { ExperimentUpdateManyWithoutOptimizationConfigsInput } from "./ExperimentUpdateManyWithoutOptimizationConfigsInput";
import { ObjectiveUpdateManyWithoutOptimizationConfigsInput } from "./ObjectiveUpdateManyWithoutOptimizationConfigsInput";

export type OptimizationConfigUpdateInput = {
  experiments?: ExperimentUpdateManyWithoutOptimizationConfigsInput;
  objectives?: ObjectiveUpdateManyWithoutOptimizationConfigsInput;
  outcomeConstraints?: string | null;
};
