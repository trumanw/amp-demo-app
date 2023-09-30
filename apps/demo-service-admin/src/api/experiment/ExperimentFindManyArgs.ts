import { ExperimentWhereInput } from "./ExperimentWhereInput";
import { ExperimentOrderByInput } from "./ExperimentOrderByInput";

export type ExperimentFindManyArgs = {
  where?: ExperimentWhereInput;
  orderBy?: Array<ExperimentOrderByInput>;
  skip?: number;
  take?: number;
};
