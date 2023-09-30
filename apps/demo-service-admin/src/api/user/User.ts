import { Experiment } from "../experiment/Experiment";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  experiments?: Experiment | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
