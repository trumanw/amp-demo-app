import { Experiment } from "../experiment/Experiment";
import { JsonValue } from "type-fest";

export type Trial = {
  createdAt: Date;
  experiment?: Experiment | null;
  id: string;
  trialBody: JsonValue;
  trialIndex: number;
  trialType?: "init" | "autogen" | "valid" | null;
  updatedAt: Date;
};
