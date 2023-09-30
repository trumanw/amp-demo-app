import { ParameterSpaceWhereInput } from "./ParameterSpaceWhereInput";
import { ParameterSpaceOrderByInput } from "./ParameterSpaceOrderByInput";

export type ParameterSpaceFindManyArgs = {
  where?: ParameterSpaceWhereInput;
  orderBy?: Array<ParameterSpaceOrderByInput>;
  skip?: number;
  take?: number;
};
