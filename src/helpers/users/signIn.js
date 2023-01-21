import { userApi } from "../../api/userApi"


export const signIn = async (loginRequest) => {
    try {
        let resp;
        console.log("looging a user");
        //llamando el endpoint de user para loggear un user
        resp = await userApi.post("login", loginRequest);
        
        
        return resp.data;

    } catch (error) {
        console.log(error.message);
        return null;
    }
}