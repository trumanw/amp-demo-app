import { TrialWhereInput } from "./TrialWhereInput";
import { TrialOrderByInput } from "./TrialOrderByInput";

export type TrialFindManyArgs = {
  where?: TrialWhereInput;
  orderBy?: Array<TrialOrderByInput>;
  skip?: number;
  take?: number;
};
