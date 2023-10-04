import { SearchSpaceWhereInput } from "./SearchSpaceWhereInput";
import { SearchSpaceOrderByInput } from "./SearchSpaceOrderByInput";

export type SearchSpaceFindManyArgs = {
  where?: SearchSpaceWhereInput;
  orderBy?: Array<SearchSpaceOrderByInput>;
  skip?: number;
  take?: number;
};
