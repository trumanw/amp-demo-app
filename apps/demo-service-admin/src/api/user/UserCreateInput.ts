import { ExperimentWhereUniqueInput } from "../experiment/ExperimentWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  experiments?: ExperimentWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
