import { Objective as TObjective } from "../api/objective/Objective";

export const OBJECTIVE_TITLE_FIELD = "objectiveName";

export const ObjectiveTitle = (record: TObjective): string => {
  return record.objectiveName?.toString() || String(record.id);
};
