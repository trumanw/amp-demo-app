import { SearchSpace } from "../searchSpace/SearchSpace";

export type ParameterConstraint = {
  createdAt: Date;
  id: string;
  searchSpace?: SearchSpace | null;
  updatedAt: Date;
};
