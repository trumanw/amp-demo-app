import { SearchSpace } from "../searchSpace/SearchSpace";

export type Parameter = {
  createdAt: Date;
  id: string;
  parameterBody: string | null;
  parameterClass: string | null;
  parameterName: string | null;
  searchSpace?: SearchSpace | null;
  updatedAt: Date;
};
