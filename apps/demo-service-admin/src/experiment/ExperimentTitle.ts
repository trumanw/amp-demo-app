import { Experiment as TExperiment } from "../api/experiment/Experiment";

export const EXPERIMENT_TITLE_FIELD = "name";

export const ExperimentTitle = (record: TExperiment): string => {
  return record.name?.toString() || String(record.id);
};
