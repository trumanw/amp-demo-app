import { ParameterWhereInput } from "./ParameterWhereInput";
import { ParameterOrderByInput } from "./ParameterOrderByInput";

export type ParameterFindManyArgs = {
  where?: ParameterWhereInput;
  orderBy?: Array<ParameterOrderByInput>;
  skip?: number;
  take?: number;
};
