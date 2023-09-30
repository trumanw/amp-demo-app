import { SortOrder } from "../../util/SortOrder";
import { User } from "../user/User";

export type ExperimentOrderByInput = {
  createdAt?: SortOrder;
  goal?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  User?: SortOrder;
  updatedAt?: SortOrder;
};
