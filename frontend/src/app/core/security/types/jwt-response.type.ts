export type SPAEncodedResponse = {
    token: string
};

export type SPADecodedResponseModel = Readonly<{
  accessToken: string;
  login: string;
  firstName: string;
  roles: string[];
}>;
