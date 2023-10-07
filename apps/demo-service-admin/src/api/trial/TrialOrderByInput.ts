import { SortOrder } from "../../util/SortOrder";

export type TrialOrderByInput = {
  createdAt?: SortOrder;
  experimentId?: SortOrder;
  id?: SortOrder;
  trialBody?: SortOrder;
  trialIndex?: SortOrder;
  trialType?: SortOrder;
  updatedAt?: SortOrder;
};
