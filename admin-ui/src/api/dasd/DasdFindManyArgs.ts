import { DasdWhereInput } from "./DasdWhereInput";
import { DasdOrderByInput } from "./DasdOrderByInput";

export type DasdFindManyArgs = {
  where?: DasdWhereInput;
  orderBy?: Array<DasdOrderByInput>;
  skip?: number;
  take?: number;
};
