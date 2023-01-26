import { backEndApi } from "../../api/backEndApi";


export const postAdmin = async (user) => {
    try {
        let resp;
        resp = await backEndApi.post("/users/create", user);
        return resp.data;

    } catch (error) {
        console.log(error.message);
        return null;
    }
}