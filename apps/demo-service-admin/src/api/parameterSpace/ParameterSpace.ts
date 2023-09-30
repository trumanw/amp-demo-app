import { JsonValue } from "type-fest";
import { Experiment } from "../experiment/Experiment";

export type ParameterSpace = {
  bounds: JsonValue;
  createdAt: Date;
  experiments?: Array<Experiment>;
  id: string;
  name: string | null;
  parameterType?: "Range" | "Choice" | "Fixed";
  updatedAt: Date;
  valueType?: "BOOL" | "FLOAT" | "INT" | "STRING" | null;
};
