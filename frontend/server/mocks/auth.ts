export type EncodedTokenResponse = {
    token: string
};

export const authStore = {
    login: <EncodedTokenResponse> {
        token: "eyJhbGciOiJIUzUxMiJ9." +
            "eyJmaXJzdE5hbWUiOiJTdXBlciBUZXN0Iiwic3ViIjoidGVzdEB1c2VyLnJ1Iiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImV4cCI6MTU5MDI4NzE4OCwiaWF0IjoxNTkwMjY5MTg4fQ." +
            "Cth9ECLtRuMpeLis05gBjVp5VPWPESZ630Kage7CqFZ0_DMEWShQDis-AABJkDL0Ze_i_y08GAATtabaF59HAQ"
    },
    registration: <EncodedTokenResponse> {
        token: "eyJhbGciOiJIUzUxMiJ9." +
            "eyJmaXJzdE5hbWUiOiJTdXBlciBUZXN0Iiwic3ViIjoidGVzdEB1c2VyLnJ1Iiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImV4cCI6MTU5MDI4NzE4OCwiaWF0IjoxNTkwMjY5MTg4fQ." +
            "Cth9ECLtRuMpeLis05gBjVp5VPWPESZ630Kage7CqFZ0_DMEWShQDis-AABJkDL0Ze_i_y08GAATtabaF59HAQ"
    }
};

export const DecodedResponseData = {
    login: "test@user.ru"
};
