import {ID} from "../../base.types";

export type SPQJwtResponseModel = Readonly<{
  accessToken: string;
  type: string;
  id: ID;
  email: string;
  authorities: string[];
}>
