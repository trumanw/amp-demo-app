import { Trial as TTrial } from "../api/trial/Trial";

export const TRIAL_TITLE_FIELD = "id";

export const TrialTitle = (record: TTrial): string => {
  return record.id?.toString() || String(record.id);
};
