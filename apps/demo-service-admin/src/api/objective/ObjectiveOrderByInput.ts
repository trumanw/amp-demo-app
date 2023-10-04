import { SortOrder } from "../../util/SortOrder";

export type ObjectiveOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  objectiveBody?: SortOrder;
  objectiveClass?: SortOrder;
  objectiveName?: SortOrder;
  optimizationConfigId?: SortOrder;
  updatedAt?: SortOrder;
};
