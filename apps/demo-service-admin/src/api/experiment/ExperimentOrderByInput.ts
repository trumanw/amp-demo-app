import { SortOrder } from "../../util/SortOrder";

export type ExperimentOrderByInput = {
  createdAt?: SortOrder;
  goal?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
