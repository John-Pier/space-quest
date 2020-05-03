export type SPQJwtResponseModel = Readonly<{
  accessToken: string;
  type: string;
  id:number;
  username: string;
  authorities: string[];
}>
