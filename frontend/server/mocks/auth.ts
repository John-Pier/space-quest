export type ResponseModel =  {
    accessToken: string;
    type: string,
    id: string | number,
    email: string,
    authorities: string[]
}

export const authStore = {
    login: <ResponseModel>{
        accessToken: "asdfasfsadgsadgasdgasdgsagasgeru898rybhve8roywvguy9y-yb-g-vwg-cwgw5h66rvgvr5e4v-gwechwrcger",
        type: "",
        id: "1",
        email: "test@user.ru",
        authorities: []
    },
    registration: <ResponseModel>{
        accessToken: "asdfasfsasadfasdfsaft34tfesdgsagasgeru898rybhve8roywvguy9y-yb-g-vwg-cwgw5h66rvgvr5e4v-gwechwrcger",
        type: "",
        id: "2",
        email: "newtest@user.ru",
        authorities: []
    }
}
