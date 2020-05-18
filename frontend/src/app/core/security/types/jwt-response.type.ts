import {ID} from "../../base.types";

export type SPQJwtResponseModel = Readonly<{
  accessToken: string;
  type: string;
  id: ID;
  login: string;
  firstName: string;
  authorities: string[];
}>;
