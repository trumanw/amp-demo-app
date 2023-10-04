import { SortOrder } from "../../util/SortOrder";
import { User } from "../user/User";

export type ExperimentOrderByInput = {
  createdAt?: SortOrder;
  goal?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  optimizationConfigId?: SortOrder;
  User?: SortOrder;
  searchSpaceId?: SortOrder;
  updatedAt?: SortOrder;
};
