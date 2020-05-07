export type SPQJwtResponseModel = Readonly<{
  accessToken: string;
  type: string;
  id:number;
  email: string;
  authorities: string[];
}>
