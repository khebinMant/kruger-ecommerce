import { backEndApi } from "../../api/backEndApi";


export const signUp = async (user) => {
    try {
        let resp;
        console.log("adding user");
        console.log(user);
        //llamando el endpoint de user para crear un user
        resp = await backEndApi.post("/users/create", user);
        
        
        return resp.data;

    } catch (error) {
        console.log(error.message);
        return null;
    }
}