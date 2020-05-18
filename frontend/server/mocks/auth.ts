export type ResponseModel =  {
    accessToken: string;
    type: string,
    id: string | number,
    login: string,
    firstName?: string,
    authorities: string[]
};

export const authStore = {
    login: <ResponseModel> {
        accessToken: "asdfasfsadgsadgasdgasdgsagasgeru898rybhve8roywvguy9y-yb-g-vwg-cwgw5h66rvgvr5e4v-gwechwrcger",
        type: "",
        id: "1",
        login: "test@user.ru",
        authorities: []
    },
    registration: <ResponseModel> {
        accessToken: "asdfasfsasadfasdfsaft34tfesdgsagasgeru898rybhve8roywvguy9y-yb-g-vwg-cwgw5h66rvgvr5e4v-gwechwrcger",
        type: "",
        id: "2",
        login: "newtest@user.ru",
        authorities: []
    }
};
